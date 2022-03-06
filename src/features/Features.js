import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";
import img1 from "../images/illustration-features-tab-1.svg";
import img2 from "../images/illustration-features-tab-2.svg";
import img3 from "../images/illustration-features-tab-3.svg";
function App() {
  const [value, setValue] = useState(0);
  const projects = [
    {
      id: "recIL6mJNfWObonls",
      title: "Bookmark in one click",
      info: "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      button: "Simple Bookmarking",
      image: img1,
    },
    {
      id: "rec61x18GVY99hQq5",
      title: "Intelligent search",
      info: "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      button: "Speedy Searching",
      image: img2,
    },
    {
      id: "rec61x18GVY99hQq5",
      title: "Share your bookmarks",
      info: " unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      button: "Easy Sharing",
      image: img3,
    },
  ];

  const { info, title, image } = projects[value];
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
            {projects.map((item, index) => {
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
          {/* project info */}
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
