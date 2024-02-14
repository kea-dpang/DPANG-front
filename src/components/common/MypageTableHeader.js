import styled from "styled-components";

const Head = styled.div`
  height: 3rem;
  width: 72rem;
  background-color: #043277;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TableHeader(props) {
  return (
    <Head>
      {props.head.map(function (a, i) {
        return (
          <Col width={a.width} className="cm-SBold18" key={i}>
            {a.text}
          </Col>
        );
      })}
    </Head>
  );
}

export default TableHeader;
