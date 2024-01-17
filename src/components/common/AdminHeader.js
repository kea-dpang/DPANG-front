import styled from "styled-components";
import { ReactComponent as AdminUser } from "../../assets/images/adminuser.svg";
import { useState } from "react";

// 관리자 헤더
const AdminHeader = () => {

    const [user, setUser] = useState('김디팡')

    return(
        <>
            <Wrap>
                <AdminUser/>
                <UserName className="cm-SRegular16 col-Black"> {user} </UserName>
            </Wrap>
        </>
    )
}

export default AdminHeader;

const Wrap = styled.div`
    display: flex;
    width: 88.9375rem;
    height: 4.125rem;
    padding: 0rem 6.25rem;
    justify-content: flex-end;
    align-items: center;
    gap: 1.4375rem;
    flex-shrink: 0;
    box-sizing: border-box; // padding까지 합쳐서 width 설정하기


    border-bottom: 1px solid var(--dark-grey);
    background: var(--white, #FFF);
`
const UserName = styled.div`
    line-height: 1.25rem; /* 125% */
`