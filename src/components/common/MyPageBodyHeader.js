import styled from 'styled-components'

const Header = styled.div`
  width: 72rem;
  height: 7rem;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #043277;
  border-bottom: 1px #043277 solid;
`;


function MyPageBodyHeader(props){

return <Header className="cm-MBold24">{props.header}</Header>;

}
export default MyPageBodyHeader;