import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, fade } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import email from "../img/email.png";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title variants={fade}>
        <img className="email" src={email} alt="" />

        <Hide>
          <motion.h2 variants={titleAnim}>Contact</motion.h2>
        </Hide>
      </Title>
      <motion.div>
        <Hide>
          <StyledForm name="contact" method="POST" variants={fade} >
          <input type="hidden" name="form-name" value="contact" />
            <motion.div className="wrapper">
              <motion.input placeholder="Name" type="text" name="name" />
            </motion.div>
            <motion.div className="wrapper">
              <motion.input placeholder="Email" type="email" name="email" />
            </motion.div>
            <motion.textarea
              placeholder="Message..."
              name="message"
              id=""
              cols="40"
              rows="1"
            ></motion.textarea>
            <motion.button type="submit">Send Message</motion.button>
          </StyledForm>
        </Hide>
        <ScrollTop />
      </motion.div>
    </ContactStyle>
  );
};

//Styled Components
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  background: white;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
    text-align: center;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  display: flex;
  justify-content: center;
  .email {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
    height: 90vh;
    width: 60%;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  width: 100%;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }
  input {
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    z-index: 2;
    background: transparent;
  }
  button {
    color: white;
    background: #0b6198;
    margin: 1rem;
    z-index: 10;
    &:hover {
      color: #0b6198;
      background: transparent;
    }
  }
  textarea {
    padding: 0.5rem;
    font-size: 1.7rem;
    font-family: "Inter", sans-serif;
    border: none;
    border-bottom: 2px solid black;
    z-index: 2;
    background: transparent;
    outline: none;
    height: 5rem;
  }
`;

export default ContactUs;
