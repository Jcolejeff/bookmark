import React from "react";
import styled from "styled-components";
import img from "../images/logo-chrome.svg";
import img1 from "../images/logo-firefox.svg";
import img2 from "../images/logo-opera.svg";
const Downloads = () => {
  return (
    <Section>
      <h3>Download the extension</h3>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <section>
        <article>
          <img src={img} alt="" />
          <h3>Add to Chrome</h3>
          <h5>Minimum version 62</h5>
          <button> Add & Install Extension</button>
        </article>
        <article>
          <img src={img1} alt="" />
          <h3>Add to Firefox </h3>
          <h5>Minimum version 55</h5>
          <button> Add & Install Extension</button>
        </article>
        <article>
          <img src={img2} alt="" />
          <h3> Add to Opera</h3>
          <h5>Minimum version 46</h5>
          <button> Add & Install Extension</button>
        </article>
      </section>
    </Section>
  );
};

export default Downloads;

const Section = styled.section`
  text-align: center;
  margin-block-start: 4rem;
  p {
    padding: 1rem;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    @media (min-width: 600px) {
      flex-direction: row;
    }

    article {
      background-color: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: var(--dark-shadow);
      button {
        border: none;
        color: aliceblue;
        padding: 0.7rem;
        margin-block-start: 1rem;
        border-radius: 3px;
        background-color: blue;
      }
    }
  }
`;
