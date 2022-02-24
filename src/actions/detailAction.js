import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const screenshotsData = await axios.get(gameScreenshotsUrl(id));
  const detailData = await axios.get(gameDetailsUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data.results,
    },
  });
};
