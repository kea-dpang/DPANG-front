import React from "react";
import styled from "styled-components";

const Monitoring = () => {
  return (
    <>
      <Wrap>
        <PageName>
          <p className="cm-LBold30 col-Black">모니터링</p>
        </PageName>
        <ListSection>
          <iframe
            src="http://61.109.214.239:5601/app/dashboards#/view/19aed4a0-c00d-11ee-9fdf-d562b4d74e6b?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-10m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:dpang-dashboard,viewMode:view)&show-query-input=true&show-time-filter=true"
            height="700"
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
