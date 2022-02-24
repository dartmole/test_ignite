import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl } from "../api";

//Action
export const loadGames = () => async (dispatch) => {
  //Fetch axios
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newData = await axios.get(newGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: { searched: searchGames.data.results },
  });
};
