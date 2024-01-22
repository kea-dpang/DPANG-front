import styled from "styled-components";
import AdminSideBar from "../../../components/common/AdminSideBar";
import AdminHeader from "../../../components/common/AdminHeader";
import { Outlet } from "react-router-dom";

const FaqManagePage = () => {
    return (
        <Wrap>
            <AdminSideBar/>
            <Section>
                <AdminHeader/>
                <Outlet/>
            </Section>
        </Wrap>
    );
};

export default FaqManagePage;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
`