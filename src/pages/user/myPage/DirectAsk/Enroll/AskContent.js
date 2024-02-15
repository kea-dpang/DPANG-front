import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const AskTitle = ({ control, detail }) => {
  return (
    <Wrap>
      <Controller
        name="askContent"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <>
            <FakePlaceholder $show={!field.value}>
              <p style={{ fontWeight: "700" }}>
                {" "}
                1:1 문의 작성 전 확인해주세요!
                <br />
              </p>
              <p style={{ fontWeight: "700", color: "var(--orange, #FA622F)" }}>
                ‼️ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의
                내용에 저장되지 않도록 주의해 주시기 바랍니다.
                <br />
                <br />
              </p>
              <p style={{ fontWeight: "700" }}>
                주문취소
                <br />
              </p>
              [주문완료] 상태일 경우에만 주문 취소 가능합니다. (배송준비중 이후
              취소불가)
              <br />
              [마이페이지 - 주문내역 상세페이지]에서 직접 취소하실 수 있습니다.
              <br />
              <br />
              <p style={{ fontWeight: "700" }}>
                배송
                <br />
              </p>
              배송일 및 배송시간 지정은 불가능합니다. (예약배송 포함)
              <br />
              주문 이후 주소지, 결제수단 변경 등 정보수정 불가능합니다.
              <br />
              <br />
              <p style={{ fontWeight: "700" }}>
                교환/반품
                <br />
              </p>
              단순 변심으로 인한 반품은 고객에게 반품비 청구됩니다.
              <br />
            </FakePlaceholder>
            <textarea
              cols="50"
              rows="10"
              className="cm-SRegular16"
              disabled={detail ? detail.status === "답변 완료" : false}
              // value={field.value}
              value={field.value || ""}
              onChange={field.onChange}
            ></textarea>
          </>
        )}
      />
    </Wrap>
  );
};

export default AskTitle;

const Wrap = styled.div`
  display: flex;

  textarea {
    height: 32.75rem;
  }
`;
const FakePlaceholder = styled.div`
  position: absolute;
  top: 5rem;
  left: 13rem;
  right: 0;
  /* margin: 1rem; */

  pointer-events: none; // 텍스트 영역을 클릭했을 때 가짜 placeholder에 의해 방해받지 않도록 설정
  opacity: ${(props) =>
    props.$show ? 1 : 0}; // show prop에 따라 보여지거나 숨겨짐
  /* transition: opacity 0.25s; */
  color: var(--dark-grey, #bcbcbc);
  /* margin: 1rem; */

  line-height: 1.25rem;
`;
