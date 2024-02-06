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
            src="http://61.109.216.206:5601/app/dashboards#/view/27a3ff40-c3ff-11ee-b75d-15677e16b3d5?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:7,i:eec2e17e-66bc-4da7-a606-41063feedb16,w:11,x:0,y:0),id:e5b79fb0-c3fe-11ee-b75d-15677e16b3d5,panelIndex:eec2e17e-66bc-4da7-a606-41063feedb16,type:lens,version:'7.10.2'),(embeddableConfig:(),gridData:(h:7,i:b706cfcd-67d1-4df8-b7ae-85a1766c64a8,w:11,x:11,y:0),id:'12cdd460-c3ff-11ee-b75d-15677e16b3d5',panelIndex:b706cfcd-67d1-4df8-b7ae-85a1766c64a8,type:lens,version:'7.10.2'),(embeddableConfig:(),gridData:(h:16,i:'99c7924c-ef82-4df0-9f0f-7dfcc3a410d1',w:26,x:22,y:0),id:'99b157f0-c3fe-11ee-b75d-15677e16b3d5',panelIndex:'99c7924c-ef82-4df0-9f0f-7dfcc3a410d1',type:visualization,version:'7.10.2'),(embeddableConfig:(),gridData:(h:9,i:'756cd5bd-89a0-4405-90aa-3d3db4924adf',w:22,x:0,y:7),id:'079970f0-c3fe-11ee-b75d-15677e16b3d5',panelIndex:'756cd5bd-89a0-4405-90aa-3d3db4924adf',type:lens,version:'7.10.2'),(embeddableConfig:(),gridData:(h:14,i:a3d5163c-7cbe-4797-908a-d79288304e1c,w:26,x:22,y:16),id:'288ad240-c3fe-11ee-b75d-15677e16b3d5',panelIndex:a3d5163c-7cbe-4797-908a-d79288304e1c,type:lens,version:'7.10.2')),query:(language:kuery,query:''),timeRestore:!f,title:DPANG_Manager,viewMode:edit)&show-query-input=true&show-time-filter=true"
            height="900"
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
