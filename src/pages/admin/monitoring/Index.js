import React from "react";
import styled from "styled-components";

const Monitoring = () => {
  return (
    <>
      <Wrap>
        <PageName>
          <p className="cm-LBold30 col-Black">통계</p>
        </PageName>
        <ListSection>
          <iframe
            src="http://61.109.216.206:5601/app/dashboards#/view/27a3ff40-c3ff-11ee-b75d-15677e16b3d5?embed=true&_g=(filters%3A!()%2Cquery%3A(language%3Akuery%2Cquery%3A'')%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))&show-query-input=true&show-time-filter=true"
            height="1300"
            width="100%"
          ></iframe>
        </ListSection>
      </Wrap>
    </>
  );
};

export default Monitoring;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  gap: 1.31rem;
  flex-direction: column;
`;
const ListSection = styled.div`
  display: flex;
  padding: 1.0625rem 7.5rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
