import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <Div>
      <h4> 35,000+ already joined</h4>
      <h3> Stay up-to-date with what we’re doing</h3>
      <input type="email" placeholder="sign up today" />
      <button>Contact Us</button>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;
  background-color: blue;
  color: aliceblue;
  padding: 5rem;
  font-family: "Hubballi", cursive;
  input {
    padding: 0.4rem;
    border-radius: 5px;
  }
  button {
    padding: 0.4rem;
    border: none;
    border-radius: 5px;
    margin-block-start: 5px;
  }
`;

export default Signup;
