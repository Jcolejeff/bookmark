import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";
import img1 from "../images/illustration-features-tab-1.svg";
import img2 from "../images/illustration-features-tab-2.svg";
import img3 from "../images/illustration-features-tab-3.svg";
function App() {
  const [value, setValue] = useState(0);
  const jobs = [
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

  const { info, title, image } = jobs[value];
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
        <div className="jobs-center">
          {/* btn container */}
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.button}
                </button>
              );
            })}
          </div>
          {/* job info */}
          <article className="job-info">
            <div className="job-desc">
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
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-bottom: 4rem;
    text-align: center;
    p {
      text-align: center;
      padding: 0rem 5rem 0rem 5rem;
    }
  }

  figure {
    width: 100%;
    img {
      width: 100%;
    }
  }

  /*
=============== 
Jobs
===============
*/

  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
  }
  .job-btn:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .job-date {
    letter-spacing: var(--spacing);
  }
  .job-desc {
    margin-bottom: 1.25rem;
    text-align: center;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
  .job-icon {
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 992px) {
    .job-info {
      display: flex;
    }
    .job-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
    .job-btn:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }
  .btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }
  .center-btn {
  }
`;
