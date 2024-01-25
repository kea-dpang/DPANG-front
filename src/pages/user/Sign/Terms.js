import React, { useContext, useEffect, useState } from "react";
import { TermsData } from "../../../assets/datas/UserTermsData";
import { ReactComponent as CheckBtn } from "../../../assets/images/checkBtn.svg";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";

const Terms = () => {
  const {
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  /////////
  useEffect(() => {
    console.log("확인용");
    console.log(watch("terms"));
    console.log(watch("all"));
  }, []);
  const terms = watch("terms");
  //////////

  // 전체 동의 체크박스 상태가 변경될 때 모든 약관 체크 상태를 업데이트
  const handleAllCheck = (checked) => {
    setValue("all", checked);
    setValue(
      "terms",
      Object.keys(terms).reduce((acc, key) => ({ ...acc, [key]: checked }), {}) // 모두 약관체크 true/false로 변경
    );
  };

  // 개별 약관 체크박스 상태가 변경될 때 전체 동의 체크박스 상태를 업데이트
  const handleTermCheck = (id, checked) => {
    setValue(`terms.${id}`, checked); // 개별 약관 상태 변경
    console.log(watch("terms"));

    const newTerms = { ...getValues("terms"), [id]: checked };

    setValue(
      "all",
      Object.values(newTerms).every((value) => value)
    );
  };

  return (
    <Wrap>
      <label>
        <CheckItem>
          <Controller
            name="all"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
              />
            )}
          />
          <CheckBtn style={{ fill: watch("all") ? "var(--navy)" : "none" }} />
          <p className="cm-SBold18">전체 동의합니다.</p>
        </CheckItem>
      </label>

      {TermsData.map((term) => (
        <label key={term.id}>
          <CheckItem>
            <Controller
              name={`terms.${term.id}`} // 동적인 form field 이름 생성(고유 식별자)
              control={control}
              rules={{
                required:
                  term.essential === "필수" ? "필수 약관입니다." : false,
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Checkbox
                    {...field}
                    type="checkbox"
                    onChange={(e) => handleTermCheck(term.id, e.target.checked)}
                  />
                  {/* 커스텀 체크 버튼 */}
                  <CheckBtn
                    style={{ fill: terms[term.id] ? "var(--navy)" : "none" }}
                  />
                  <p className="cm-SBold16">{term.title}</p>
                  <span className="cm-SBold16">({term.essential})</span>
                  {/*  */}
                  {error && <p style={{ color: "red" }}>{error.message}</p>}
                </>
              )}
            />
          </CheckItem>
        </label>
      ))}
    </Wrap>
  );
};
export default Terms;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  gap: 2.06rem;
  border: 1px solid black;
  padding: 4rem 0 0 2rem;
  box-sizing: border-box;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  // 체크박스를 완전히 숨기지 않고, 화면 바깥으로 이동시키는 기법
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;
const CheckItem = styled.div`
  display: inline-flex; // or inline-block
  align-items: center;
  gap: 1.44rem;
  text-align: center;

  cursor: pointer;
  span {
    content: ${({ option }) => (option === "all" ? "" : "ㅇㅇㅇㅇㅇ")};
    color: var(--semi-light-grey);
  }
`;
