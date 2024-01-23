import styled from "styled-components";
import RefundDetail from "./RefundDetail";
import CancelDetail from "./CancelDetail";

function DetailBox(props) {
  const data = props.data[props.id];

  return(
    <>
    {/* 환불과 취소 상태에 따라 다른 컴포넌트를 호출하도록 함 */}
     {data.type==='환불'? <RefundDetail data={data} />:<CancelDetail data={data}/>}
    </>
  )
}

export default DetailBox;
