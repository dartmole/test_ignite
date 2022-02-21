import React from "react";
//Style
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="" />
        <h1>Ignite</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 1rem 5%;
  text-align: center;
  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    box-shadow: 0 6px 16px rgba(83, 83, 83, 0.2);
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
