import styled from "styled-components";

import FacebookIcon from "assets/images/userFooterIcon/facebook.svg";
import InstaIcon from "assets/images/userFooterIcon/instagram.svg";
import GithubIcon from "assets/images/userFooterIcon/github.svg";

function ImageBox() {
  const handleIconClick = (url) => {
    window.location.href = url;
  };

  return (
    <ImageContainer>
      <Image
        src={FacebookIcon}
        onClick={() => {
          handleIconClick("https://www.facebook.com/?locale=ko_KR");
        }}
      />
      <Image
        src={InstaIcon}
        onClick={() => {
          handleIconClick("https://www.instagram.com/");
        }}
      />
      <Image
        src={GithubIcon}
        onClick={() => {
          handleIconClick("https://github.com/kea-dpang");
        }}
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  width: 12rem;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

export default ImageBox;
