import React, { useEffect, useState } from 'react';
import { TermsData } from '../../../assets/datas/UserTermsData';
import {ReactComponent as CheckBtn} from '../../../assets/images/checkBtn.svg'
import styled from 'styled-components';

const Terms = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [termCheck, setTermCheck] = useState(TermsData.reduce((acc, term) => ({ ...acc, [term.id]: false }), {})); // term의 id별로 false 값을 가지게 됨(객체)

    // terms 값이 모두 true일 때 AllChecked도 true
    useEffect(() => {
        const allTermsAgreed = Object.values(termCheck).every(value => value); // 모든 값이 true일 때 true, 그렇지 않을 때 false
        setAllChecked(allTermsAgreed);
    }, [termCheck]);

    const handleCheckboxChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.checked)
    
        if(e.target.name === 'all') {
            console.log("전체 선택이 체크되었습니다.")
            setAllChecked(e.target.checked);
    
            // 한번에 체크 상태 바꾸기
            setTermCheck(prevTermCheck => ({
                ...prevTermCheck,
                ...Object.keys(prevTermCheck).reduce((acc, key) => {
                    return { ...acc, [key]: e.target.checked }
                }, {})
            }));

        } else {
            setTermCheck({
                ...termCheck,
                [e.target.name]: e.target.checked
            });
        };
        }

    return (
        <Wrap>
            <label>
                <CheckItem>
                    <Checkbox
                        type="checkbox"
                        name="all"
                        checked={allChecked}
                        onChange={handleCheckboxChange}
                    />
                    <CheckBtn style={{ fill: allChecked ? 'var(--navy)' : 'none' }} />
                    <p className='cm-SBold18'>전체 동의합니다.</p>
                </CheckItem>
            </label>

            {TermsData.map((term) => (
                <label key={term.id}>
                    <CheckItem>
                        <Checkbox
                            type="checkbox"
                            name={term.id}
                            checked={termCheck[term.id]}
                            onChange={handleCheckboxChange}
                        />
                        <CheckBtn style={{ fill: termCheck[term.id] ? 'var(--navy)' : 'none' }} />
                        <p className='cm-SBold16'>{term.title}</p>
                        <span className='cm-SBold16'>({term.essential})</span>
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

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    /* appearance: none; */
    /* cursor: pointer; */
    /* width: 0; */
    // 체크박스를 완전히 숨기지 않고, 화면 바깥으로 이동시키는 기법
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
`;
const CheckItem = styled.div`
    /* display: flex; */
    display: inline-flex;  // or inline-block
    align-items: center;
    gap: 1.44rem;
    text-align: center;

     cursor: pointer;
    span {
        content: ${({ option }) => option === "all" ? "" : "ㅇㅇㅇㅇㅇ"};
        color: var(--semi-light-grey);
    }
`;