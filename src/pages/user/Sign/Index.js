import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { display } from '@mui/system';
import { TermsData } from '../../../assets/datas/UserTermsData';
import {ReactComponent as CheckBtn} from '../../../assets/images/checkBtn.svg'
// import { Checkbox } from '@mui/material';
import { useForm } from "react-hook-form";

const SignPage = () => {
    //////////////////////////////////////////////////
    const {register, handleSubmit, formState: { isSubmitting, isSubmitted, errors }, getValues} = useForm();
    //////////////////////////////////////////////////
    const [form, setForm] = useState({
        employeeId: '',
        email: '',
        password: '',
        passwordCheck: '',
        name: '',
        joinDate: '',
        terms: TermsData.reduce((acc, term) => ({ ...acc, [term.id]: false }), {})
    });

    const [allChecked, setAllChecked] = useState(false);

    // terms 값이 모두 true일 때 AllChecked도 true
    useEffect(() => {
        const allTermsAgreed = Object.values(form.terms).every(value => value); // 모든 값이 true일 때 true, 그렇지 않을 때 false
        setAllChecked(allTermsAgreed);
    }, [form.terms]);
    
    const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    });
    };
    
    const handleCheckboxChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.checked)

    if(e.target.name === 'all') {
        console.log("전체 선택이 체크되었습니다.")
        setAllChecked(e.target.checked);

        // 한번에 체크 상태 바꾸기
        setForm(prevForm => ({
            ...prevForm,
            terms: Object.keys(prevForm.terms).reduce((acc, key) => {
                return {...acc, [key]: e.target.checked}
            }, {})
        }));
    } else {
        setForm({
            ...form,
            terms: {
            ...form.terms,
            [e.target.name]: e.target.checked
            }
        });
        };
    }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(form);
    // };
    
    return (
        <Wrap>
            <LogoImg src={Logo} alt="Logo" />
            <BoxForm onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
                <h1 className='cm-XLBold36'>회원가입</h1>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '33.3125rem'},
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <p>사원번호</p>
                    <TextField id="employeeId" variant="outlined" name="employeeId" onChange={handleInputChange} 
                        error={!!errors.employeeId} // 에러가 있으면 true
                        helperText={errors.employeeId && errors.employeeId.message} // 에러 메시지 표시
                        {...register("employeeId", {
                            required: "사원번호는 필수 입력입니다.",
                        })}
                    />
                    <p>아이디(회사 이메일)</p>
                    <TextField id="email" variant="outlined" name="email" onChange={handleInputChange} 
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                        {...register("email", {
                            required: "이메일은 필수 입력입니다.",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "이메일 형식에 맞지 않습니다.",
                            },
                        })}
                    />
                    <p>비밀번호</p>
                    <TextField id="password" variant="outlined" name="password" type='password' onChange={handleInputChange}
                        error={!!errors.password} 
                        helperText={errors.password && errors.password.message} 
                        {...register("password", {
                            required: "비밀번호는 필수 입력입니다.",
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
                                message: "비밀번호는 8~15자 이내이며, 최소 하나의 대문자, 소문자, 숫자, 특수 문자가 포함되어야 합니다.",
                            }
                        })}
                    />
                    <p>비밀번호 확인</p>
                    <TextField id="passwordCheck" variant="outlined" name="passwordCheck" type='password' onChange={handleInputChange}
                        error={!!errors.passwordCheck} 
                        helperText={errors.passwordCheck && errors.passwordCheck.message}  
                        {...register("passwordCheck", {
                            required: "비밀번호 확인은 필수 입력입니다.",
                            validate: value => value === getValues('password') || "비밀번호가 일치하지 않습니다.",
                        })}
                    />
                    <p>이름</p>
                    <TextField id="name" variant="outlined" name="name" type='password' onChange={handleInputChange}
                        error={!!errors.name} 
                        helperText={errors.name && errors.name.message} 
                        {...register("name", {
                            required: "이름은 필수 입력입니다.",
                        })}
                    />
                    <p>입사일</p>
                    <TextField id="joinDate" variant="outlined" name="joinDate" onChange={handleInputChange} placeholder='YYYYMMDD 형식으로 입력해주세요.' 
                        error={!!errors.joinDate} 
                        helperText={errors.joinDate && errors.joinDate.message} 
                        {...register("joinDate", {
                            required: "입사일은 필수 입력입니다.",
                            pattern: {
                                value: /^\d{6}$/,
                                message: "6자리 숫자로 작성되어야 합니다."
                            }
                        })}
                    />
                </Box>

                <Terms>
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
                        // <CheckBtn/>
                        // <input type='checkbox'/> 
                        <label key={term.id}>
                            <CheckItem>
                                <Checkbox 
                                    type="checkbox" 
                                    name={term.id}
                                    checked={form.terms[term.id]} 
                                    onChange={handleCheckboxChange} 
                                />
                                <CheckBtn style={{ fill: form.terms[term.id] ? 'var(--navy)' : 'none' }} />
                                <p className='cm-SBold16'>{term.title}</p>
                                <span className='cm-SBold16'>({term.essential})</span>
                            </CheckItem>
                        </label>
                    ))}
                </Terms>

                <Submit>
                    <StyledButton type='submit' className='Btn_M_Navy' disabled={isSubmitting}>가입하기</StyledButton>
                </Submit>
            </BoxForm>
        </Wrap>
    );
};

export default SignPage;

const Wrap = styled.div`
    width: 100vW;
    /* height: 100vh; */
    min-height: 60rem;
    max-width: 100%;
    box-sizing: border-box;
    /* min-width: ; */

    /*  */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const LogoImg = styled.img`
    width: 16.4375rem;
    height: 5.5625rem;  
`;
const BoxForm = styled.form`
    width: 76.4375rem;
    /* height: 108.9375rem; */
    padding: 3rem;
    box-sizing: border-box;

    background: var(--white);
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 4.44rem;

    text-align: center;

    /* 자식에게 border 주기 */
    & > *:not(:last-child) {
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--black);
        width: 100%;
    }
`;
const ItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    // TextField(textarea) 부분이 p태그 제외하고 Box부모태그를 꽉 채우게 하기 위해 
    & > p {
      flex: 1;
    }

    & > .MuiTextField-root {
      flex: 3;
    }
`;
const Submit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.89rem;
`;
const StyledButton = styled.button`
    width: 20.3125rem;
`;
const Terms = styled.div`
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
        /* content: ${props => props.$option === "all" ? "" : (props.option === "true" ? "(필수)" : "(선택)")}; */
        /* content: ${props => props.option === "all" ? "" : "ㅇㅇㅇㅇㅇ"}; */
        /* content: ${(props) => props.option === "all" ? "ㅌㅋㅌㅋㅋ" : "ㅇㅇㅇㅇㅇ"}; */
        content: ${({ option }) => option === "all" ? "" : "ㅇㅇㅇㅇㅇ"};
        /* content: 'ee'; */

        color: var(--semi-light-grey);
    }
`;