import React from "react";
//Style
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//Router
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  //Load detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/games/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} alt={game.name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  h3 {
    min-height: 98px;
    padding-bottom: 0;
  }
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
`;

export default Game;
