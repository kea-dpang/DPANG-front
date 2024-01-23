import styled from "styled-components";
import * as React from 'react';
import { useState } from "react";
import '../../../../styles/fonts.css';
import Table from './Table';
import data from '../../../../assets/datas/AdminRefundData'
import { useParams } from "react-router-dom";
import RefundDetail from "./RefundDetail";


const Index = () => {

    const {id} = useParams();
    console.log(id)

    return (
        <>  
            <Wrap>
                <PageName className='cm-LBold30 col-Black'> 취소 관리</PageName>
                <PageSubName className='cm-MBold24 col-Navy'> 취소 내역 상세조회</PageSubName>


                <InputSection>
                    <Table data={data} id={id}/> 
                    <RefundDetail data={data} id={id}/>
                </InputSection>
            </Wrap>
        </>
    );
};

export default Index;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
   
`
const PageName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 0rem 0.9375rem 7.5rem;
    align-items: center;
`
const PageSubName = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 2.125rem 7.5rem 0.9375rem 7.5rem;
    align-items: center;
    font-size: 1.5rem;
`


const InputSection = styled.div`
    display: flex;
    width: 88.9375rem;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기
    padding: 0rem 7.5rem 6.25rem 7.5rem;
    flex-direction: column;
    align-items: center;


`
