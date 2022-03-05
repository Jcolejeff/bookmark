import React from "react";
import styled from "styled-components";
import img from "../images/logo-bookmark.svg";

const Footer = () => {
  return (
    <Div>
      <ul>
        <li>Features </li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </Div>
  );
};

export default Footer;
const Div = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 5rem;
  }
  text-align: center;
  padding: 3rem;
  background-color: darkblue;
  color: aliceblue;
`;
