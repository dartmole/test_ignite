import React from "react";
//Style
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//Router
import { Link } from "react-router-dom";
//Image resize
import { getSmallImage } from "../util";

const Game = ({ game }) => {
  const stringPathId = game.id.toString();
  //Load detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/games/${game.id}`}>
        <motion.h3 layoutId={`h3 ${stringPathId}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={getSmallImage(game.background_image, 640)}
          alt={game.name}
        />
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
    padding: 1rem 1rem 0 1rem;
  }
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
`;

export default Game;
