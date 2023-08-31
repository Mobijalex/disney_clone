import { styled } from "styled-components";
import ImageSlider from "./imageSlider";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center fixed no-repeat;
    background-size: cover;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
