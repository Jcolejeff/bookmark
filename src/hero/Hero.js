import React from "react";
import styled from "styled-components";
import img from "../images/illustration-hero.svg";

const Hero = () => {
  return (
    <>
      <Div>
        <article>
          <figure>
            <img src={img} alt="logo" />
          </figure>
        </article>
        <article>
          <h2>A Simple Bookmark Manager </h2>
          <h4>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </h4>
          <button> Get it on Chrome</button>
          <button> Get it on Firefox</button>
        </article>
      </Div>
    </>
  );
};

export default Hero;

const Div = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-block-start: 4rem;
  font-family: "Hubballi", cursive;

  & > * {
    flex: 1;
  }
  @media (min-width: 650px) {
    flex-direction: row-reverse;
  }

  figure {
    width: 80%;
    margin-inline-start: 2.2rem;
    margin-block-start: 3rem;
    img {
      width: 100%;
    }
  }
  h4 {
    width: 90%;
    padding-inline-start: 3rem;
  }
  button {
    background-color: blue;
    margin: 0.4rem;
    color: white;
    padding: 0.7rem;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;
