import styled from 'styled-components'
import { ReactComponent as Message } from "@images/messageDot.svg";

const NoContent = styled.div`
  width: 100%;
  padding: 5rem 15rem;
  box-sizing: border-box;
  background-color: var(--light-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
`;

function UserEmptyData(props) {

    return (
        <NoContent className="cm-SRegular16 col-DarkGrey">
            <Message
                style={{
                    color: "var(--dark-grey)",
                    width: "2.5rem",
                    height: "2.5rem",
                }}
            />
            <div>{props.text} </div>
        </NoContent>
    )


}
export default UserEmptyData;