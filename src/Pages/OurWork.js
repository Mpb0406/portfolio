import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import vgdbupcoming from "../img/vgdbupcoming.PNG";
import colorizerhome from "../img/colorizerhome.PNG";
import frequenciplaying from "../img/frequenciplaying.PNG";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#1b1b1b" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>V G D B (Video Game DataBase)</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={vgdbupcoming} alt="" />
          </Hide>
        </Link>
        </Movie>
        <ButtonWrapper>
          <StyledButton>
           <a href="https://github.com/Mpb0406/VGDB" target={"_blank"}>Code</a> 
          </StyledButton>
          <StyledButton>
            <a href="https://vgdatabase.netlify.app/" target={"_blank"}>Hosted Site</a>
          </StyledButton>
        </ButtonWrapper>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Colorizer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={colorizerhome} alt="" />
        </Link>
      </Movie>
      <ButtonWrapper>
          <StyledButton>
           <a href="https://github.com/Mpb0406/Colors" target={"_blank"}>Code</a> 
          </StyledButton>
          <StyledButton>
            <a href="https://colorizer-app.netlify.app/" target={"_blank"}>Hosted Site</a>
          </StyledButton>
        </ButtonWrapper>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Frequenci</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={frequenciplaying} alt="" />
        </Link>
      </Movie>
      <ButtonWrapper>
          <StyledButton>
           <a href="https://github.com/Mpb0406/Frequenci" target={"_blank"}>Code</a> 
          </StyledButton>
          <StyledButton>
            <a href="https://frequenci.netlify.app/" target={"_blank"}>Hosted Site</a>
          </StyledButton>
        </ButtonWrapper>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #0b6198;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 1rem;
  }
  h2 {
    color: whitesmoke;
  }
`;

const StyledButton = styled(motion.button) `
  margin: 0 2rem 5rem;
  border-radius: 0.2rem;
  a {
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    padding: 2rem;
  }
`;

const ButtonWrapper = styled(motion.div) `
  display: flex;
  justify-content: center;
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10;
  width: 100%;
  height: 100vh;
  background: #962D2D;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #323EDD;
`;

const Frame3 = styled(Frame1)`
  background: #DC2ADE;
`;

const Frame4 = styled(Frame1)`
  background: #4D089A;
`;

export default OurWork;
