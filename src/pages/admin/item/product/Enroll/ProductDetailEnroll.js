import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import PhotoIcon from '@mui/icons-material/Photo';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductDetailEnroll = ({ productInfo, setProductInfo }) => {

    const [itemImg, setItemImg] = useState();
    const [infoImg, setInfoImg] = useState();

    const [isHovered, setIsHovered] = useState(false);
        // 상품정보 이미지삭제 감지
        const handleItemImgDelete = (e) => {
            setItemImg(null);
        };
    // 상세정보 이미지삭제 감지
    const handleInfoImgDelete = (e) => {
        setInfoImg(null);
    };
    return (
        <Wrap>
            <div className="cm-SBold18 col-Navy">상품 상세 정보</div>
            {/* 상품 정보 입력 칸 */}
            <Table>
                {/* 상품 이미지  */}
                <Row>
                    <p className="cm-SBold16 col-Black">상품 이미지</p>
                    <ContentBox>
                        {itemImg ? (
                            <div style={{ position: 'relative' }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                <img
                                    src={infoImg}
                                    alt="상품 이미지"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                {isHovered && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'opacity 0.3s',
                                        cursor: 'pointer'
                                    }}>
                                        {/* 사진에 마우스 hover시, 삭제아이콘 등장 */}
                                        <button onClick={handleItemImgDelete}
                                            style={{ backgroundColor: 'transparent', border: 'none', }}>
                                            <DeleteIcon style={{ color: 'var(--light-grey)' }} /> </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // 사진 선택하는 로직 넣기
                            <Fab color="inherit" aria-label="add" sx={{ maxWidth: '40px', maxHeight: '40px' }}>
                                <PhotoIcon color="var(--light-grey)" />
                            </Fab>
                        )}
                    </ContentBox>
                </Row>
                {/* 상세 이미지  */}
                <Row>
                    <p className="cm-SBold16 col-Black">상세 이미지</p>
                    <ContentBox>
                        {infoImg ? (
                            <div style={{ position: 'relative' }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                <img
                                    src={infoImg}
                                    alt="상세정보 이미지"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                {isHovered && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'opacity 0.3s',
                                        cursor: 'pointer'
                                    }}>
                                        {/* 사진에 마우스 hover시, 삭제아이콘 등장 */}
                                        <button onClick={handleInfoImgDelete}
                                            style={{ backgroundColor: 'transparent', border: 'none', }}>
                                            <DeleteIcon style={{ color: 'var(--light-grey)' }} /> </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // 사진 선택하는 로직 넣기
                            <Fab color="inherit" aria-label="add" sx={{ maxWidth: '40px', maxHeight: '40px' }}>
                                <PhotoIcon color="var(--light-grey)" />
                            </Fab>
                        )}
                    </ContentBox>
                </Row>
            </Table>
        </Wrap>
    );
};

export default ProductDetailEnroll;
const Wrap = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 10rem 6.25rem 10rem;
    flex-direction: column;
`
const Section = styled.div`
    display: flex;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
    gap: -0.0625rem;
`
const ContentBox = ({ children }) => (
    <div style={{ width: "100%", margin: "1rem" }}>
        <Box
            sx={{
                '& > :not(style)': { m: 0, width: '100%' },
                display: 'flex',
                flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
        >
            {children}
        </Box>
    </div>

);
const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 69rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    // padding: 0rem 7.5rem 1rem 7.5rem;
    padding-top: 1rem;

`;
const Row = styled.div`
    border-top: 1px solid var(--black);
    &:last-child {
        border-bottom: 1px solid var(--black);
    }
    display: flex;
    p {
        background: var(--light-grey, #F4F4F4);
        /* padding: 2rem; */
        width: 13rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;
const Content = styled.div`
    width: 100%;
    margin: 1rem;
`;
const Submit = styled.div`
    padding-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;