import React, { useState, useEffect } from "react";
//Style
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../actions/gamesAction";
//Components
import Game from "./Game";

const Nav = () => {
  const dispatch = useDispatch();
  //State
  const [input, setInput] = useState("");
  //Grabbing input
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(input));
    setInput("");
  };
  const searchedGames = useSelector((state) => state.games.searched);

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={submitSearch}>
        <input type="text" value={input} onChange={inputHandler} />
        <button type="submit">Search</button>
      </form>
      {searchedGames.length > 0 && (
        <Games>
          {searchedGames.map((game) => (
            <Game className="searchedGame" key={game.id} game={game} />
          ))}
        </Games>
      )}
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
  .searchedGame {
    display: flex;
    flex-direction: row;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding-top: 2rem;
`;

export default Nav;
