import React, { useState } from "react";
import heroimage from "../img/heroimage.svg";
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import github from "../img/github.svg";
import resume from "../img/resume.svg";
import Resume from "../Resume.pdf";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi. My name </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              is <span>Mike Bolloskis.</span> I'm a{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>front-end web developer.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>I am a self-taught developer</motion.p>
        <ButtonWrapper>
          <MainBtn variants={fade}>
            <img src={github} alt="" />
            <a href="https://github.com/Mpb0406" target={"_blank"}>
              GitHub
            </a>
          </MainBtn>
          <MainBtn variants={fade} type="submit">
            <img src={resume} alt="" />
            <a href={Resume} target={"_blank"}>
              Resume
            </a>
          </MainBtn>
        </ButtonWrapper>
      </Description>
      <Image>
        <Hero variants={photoAnim} src={heroimage} alt="guy with camera" />
      </Image>
      <Wave />
    </About>
  );
};
const Hero = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const MainBtn = styled(motion.button)`
  display: flex;
  img {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem 0 0;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  width: 60%;
  margin: auto;
  button {
    z-index: 2;
    margin: 0 2rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
`;

export default AboutSection;
