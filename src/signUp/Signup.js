import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <Div>
      <h4> 35,000+ already joined</h4>
      <h3> Stay up-to-date with what we’re doing</h3>
      <input type="email" placeholder="sign up today" />
      <button>contact us</button>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;
  background-color: blue;
  color: aliceblue;
  padding: 5rem;
  input {
    padding: 0.4rem;
  }
  button {
    padding: 0.4rem;
    border: none;
  }
`;

export default Signup;
