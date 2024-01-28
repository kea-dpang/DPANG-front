import styled from "styled-components";
import SingleItem from "../../assets/data/user/ItemDetailData";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Modal = ({ setIsModalOpen }) => {
  const [askTitle, setAskTitle] = useState();
  const [askContent, setAskContent] = useState();

  const handleTitleChange = (e) => setAskTitle(e.target.value);
  const handleContentChange = (e) => setAskContent(e.target.value);
  const handleAddBtn = () => {
    console.log("문의 등록완료");
  };

  return (
    <Container>
      <Background onClick={() => setIsModalOpen(false)}>
        <ModalBlock onClick={(e) => e.stopPropagation()}>
          <TitleWrap>
            <PageName className="cm-MBold24 col-Black">상품 문의</PageName>
            <QuitButton
              className="cm-MRegular24 col-SemiLightGrey"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </QuitButton>
          </TitleWrap>
          <ProductWrap>
            <ProductImg $imgUrl={SingleItem[0].imgUrl} />
            <div className="cm-SBold18 col-Black">{SingleItem[0].name}</div>
          </ProductWrap>
          <ContextWrap>
            <div className="cm-SBold16">제목</div>
            <Box
              sx={{ "& > :not(style)": { m: 1, width: "40rem" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="title"
                onChange={handleTitleChange}
                variant="outlined"
                placeholder="제목을 입력해주세요"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": { borderColor: "var(--navy)" },
                  },
                }}
              />
            </Box>
          </ContextWrap>
          <ContextWrap>
            <div className="cm-SBold16">내용</div>
            <Box
              sx={{ "& > :not(style)": { m: 1, width: "40rem" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="content"
                onChange={handleContentChange}
                variant="outlined"
                placeholder="상품문의 작성 전 확인해 주세요.  답변은 영업일 기준 2~3일 소요됩니다. &#13;&#10;해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다. &#13;&#10;배송관련, 주문관련 문의 및 요청은 1:1 문의에 남겨주세요"
                InputLabelProps={{ shrink: true }}
                InputProps={{ style: { whiteSpace: "pre-line" } }}
                multiline
                minRows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": { borderColor: "var(--navy)" },
                  },
                }}
              />
            </Box>
          </ContextWrap>
          {/* 등록하기 버튼 */}
          <Button>
            <button className="Btn_S_Navy" onClick={() => handleAddBtn()}>
              등록하기
            </button>
          </Button>
        </ModalBlock>
      </Background>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBlock = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56rem;
  height: 40rem;
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 2.0625rem 4.125rem;
  background-color: var(--white);
  color: black;
  gap: 1.5625rem;
`;

const PageName = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;

const QuitButton = styled.button`
  background-color: white;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40rem;
  padding: 1.06rem 0rem;
  box-sizing: border-box;
  border-bottom: 1px solid var(--semi-light-grey);
`;

const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6875rem;
  box-sizing: border-box;
  width: 100%;
`;

const ProductImg = styled.div`
  width: 5rem;
  height: 5rem;
  background: url(${(props) => props.$imgUrl}) center center / cover no-repeat;
`;

const ContextWrap = styled.div`
  display: flex;
  padding-left: 0.5rem;
  align-items: center;
  gap: 4rem;
  box-sizing: border-box;
`;
const Button = styled.div`
  display: flex;
`;
