import styled from "styled-components";
import search from "@images/search.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState(""); // 검색어 상태

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      window.location.href = `/user/search?query=${query}`;
    }
  };
  return (
    <>
      <InputBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleOnKeyPress} // Enter 입력 이벤트 함수
      />
      {/* 검색어 입력 */}
      <Link to={`/user/search?query=${query}`}>
        {" "}
        {/* 검색 버튼 클릭 시 검색 결과 페이지로 이동 , 주소에 검색어 포함시킴 */}
        <ButtonContainer>
          <SearchIcon src={search} />
        </ButtonContainer>
      </Link>
    </>
  );
}
export default SearchBar;

const InputBar = styled.input`
  width: 13.5rem;
  height: 1.9rem;
  outline: none;
  border: 1px solid var(--dark-grey);
  box-sizing: border-box;
  padding-left: 3px;
`;
const ButtonContainer = styled.button`
  width: 2.5rem;
  height: 1.9rem;
  background-color: var(--navy);
  border: 1px solid var(--navy);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;
