import React from "react";
//Styles
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FAQ
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Additional Skills<span>Misc</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={"Axios & Async JS"}>
          <div className="answer">
            <p>
              Built multiple projects implementing API's via Async Await as well
              as Axios within React.
            </p>
            <p>
              Understand the logic beneath the syntactic sugar that is Async
              Await/Axios.
            </p>
          </div>
        </Toggle>
        <Toggle title={"Animation"}>
          <div className="answer">
            <p>
              Experience building projects using various methods of animations
            </p>
            <ul>
              <li>Vanilla CSS Animations (keyframes)</li>
              <li>GSAP</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </Toggle>
        <Toggle title={"UI/UX Design"}>
          <div className="answer">
            <p>
              Proficient with vector design and wire-framing/prototyping
              programs such as:
            </p>
            <ul>
              <li>Adobe Illustrator</li>
              <li>Adobe Experience Design (XD)</li>
              <li>Figma</li>
            </ul>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      font-size: 1.6rem;
    }
    ul {
      padding: 3rem 1rem 0;
      color: #ccc;
      font-size: 1.5rem;
      line-height: 200%;
      font-weight: bolder;
    }
  }
`;

export default FaqSection;
