import logo from "../../../assets/images/logo.png";
import styled from "styled-components";
import ShortCut from "./ShortCut";
import Category from "./Category";
import User from "./User";
import ImageShortCut from "./ImageShortCut";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
  width: 89rem;
  height: 3rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const Logo = styled.img`
  height: 3rem;
  width: 8rem;
  font-size: 14px;
`;

const Empty = styled.div`
  width: ${(props) => props.width};
  height: 3rem;
  display: flex;
  align-items: center;
  color: #bcbcbc;
  justify-content: center;
`;

function NavBar(props) {

  const navi = useNavigate();

  return (
    <Nav className="cm-SRegular16 ">
      <Logo src={logo} onClick={()=>navi("/user/mainpage")}/>
      <Empty width="3rem" />
      <ShortCut />
      <Empty width="2rem"> | </Empty>
      <Category handleClick={props.handleClick} />
      <Empty width="21rem" />
      <SearchBar />
      <Empty width="3rem" />
      <ImageShortCut />
      <Empty width="3rem"> | </Empty>
      <User />
    </Nav>
  );
}
export default NavBar;
