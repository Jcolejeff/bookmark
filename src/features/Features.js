import React, { useState } from "react";
import styled from "styled-components";
import features from "./data";

function App() {
  const [value, setValue] = useState(0);

  const { info, title, image } = features[value];
  return (
    <Div>
      <section className="section">
        <div className="title">
          <h2>Features</h2>
          <p>
            {" "}
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className="underline"></div>
        </div>
        <div className="projects-center">
          {/* btn container */}
          <div className="btn-container">
            {features.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`project-btn ${index === value && "active-btn"}`}
                >
                  {item.button}
                </button>
              );
            })}
          </div>
          {/* features info */}
          <article className="project-info">
            <div className="project-desc">
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
            <figure>
              <img src={image} alt="" />
            </figure>
          </article>
        </div>
      </section>
    </Div>
  );
}

export default App;
const Div = styled.div`
  margin-block-start: 4rem;
  padding: 2rem;
  box-shadow: var(--dark-shadow);

  figure {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .title {
    margin-bottom: 4rem;
    text-align: center;
    p {
      text-align: center;
      padding: 0rem 5rem 0rem 5rem;
    }
  }
`;
