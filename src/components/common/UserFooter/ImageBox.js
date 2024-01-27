import styled from "styled-components";
import FacebookIcon from "assets/images/facebook.png";
import InstaIcon from "assets/images/instagramicon.png";
import GithubIcon from "assets/images/github.png";

function ImageBox() {
  return (
    <ImageContainer>
      <Image src={FacebookIcon} />
      <Image src={InstaIcon} />
      <Image src={GithubIcon} />
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
