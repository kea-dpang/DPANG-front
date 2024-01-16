import styled from 'styled-components'
import search from '../../../assets/images/search.svg'

const InputBar = styled.input`

width: 13.5rem;
height: 1.9rem;
outline: none;
padding: 0;
border: 1px #CFCFCF solid;
padding-left: 3px;

`

const ButtonContainer = styled.div`

width: 2.5rem;
height: 1.9rem;
background-color: #043277;
border: 1px #043277 solid;
display: flex;
justify-content: center;
align-items: center;

`

const Button = styled.img`


width: 1.2rem;
height: 1.2rem;



`

function SearchBar(){

return(
<>
<InputBar />
<ButtonContainer>
<Button src={search}/>
</ButtonContainer>
</>



)


}
export default SearchBar;