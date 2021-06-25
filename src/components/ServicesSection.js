import React from "react";
//Import Icons
import redux from "../img/redux.svg";
import sass from "../img/sass.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
import home2 from "../img/home2.png";
import skills from '../img/skills.svg';
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Image>
        <img src={skills} alt="" />
      </Image>
      <Description>
        <h2>
          My <span>skills:</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={sass} alt="" />
              <h3>Sass/CSS</h3>
            </div>
            <p>Styling in CSS, Sass and Styled-components.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={javascript} alt="" />
              <h3>JavaScript</h3>
            </div>
            <p>ES6 JavaScript</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={react} alt="" />
              <h3>React.js</h3>
            </div>
            <p>Functional React with hooks.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={redux} alt="" />
              <h3>Redux</h3>
            </div>
            <p>State management with Redux.</p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  margin: 1rem;
  p {
    text-align: center;
  }
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin: 0.5rem;
      color: white;
      padding: 0.5rem 0.5rem;
      font-size: 2rem;
    }
    img {
      height: 5rem;
      width: 5rem;
    }
  }
`;

export default ServicesSection;
