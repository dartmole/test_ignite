import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { loadDetail } from "../actions/detailAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Style
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
//Router
import { useLocation } from "react-router-dom";

const Home = () => {
  //Get location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames()).then(() => {
      if (pathId) {
        dispatch(loadDetail(pathId));
      }
    });
  }, [dispatch]);
  //Get the data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <LayoutGroup>
        <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
        <h2>Upcoming games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5%;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export default Home;
