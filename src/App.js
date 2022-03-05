import React from "react";
import Navbar from "./navbar/nav/Navbar";
import "./index.css";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Downloads from "./downlads/Downloads";
import Faq from "./faq/Questions";
import Signup from "./signUp/Signup";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Downloads></Downloads>
      <Faq></Faq>
      <Signup></Signup>
      <Footer></Footer>
    </>
  );
}

export default App;
