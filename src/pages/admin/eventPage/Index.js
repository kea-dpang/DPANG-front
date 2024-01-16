import styled from "styled-components";
import AdminSideBar from "../../../components/common/AdminSideBar";
import { Outlet } from "react-router-dom";
const Index = () => {
    return(
        <Wrap>
            <AdminSideBar/>
            <Section>
                <AdminHeader/>
                <Outlet/>
            </Section>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
`
const AdminHeader = styled.div`
    width: 100.9375rem;
    height: 2.8125rem;
    background-color: red;
`

export default Index;