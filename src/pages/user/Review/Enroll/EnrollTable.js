import styled from "styled-components";

const Table = styled.div`
  width: 72rem;
  height: 26rem;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
  margin-top: 2rem;
`;
const Border = styled.div`

width: 72rem;
border-bottom: 1px black solid;

`
const Box = styled.div`
  height: ${(props) => props.height};
  width: 72rem;
  
`;

function EnrollTable() {
  return (
    <Table>
      <Box height="7rem"></Box>

      <Border />

      <Box height="19rem"></Box>
    </Table>
  );
}
export default EnrollTable;
