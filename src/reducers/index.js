//Redux
import { combineReducers } from "redux";
//Reducers
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailReducer,
});

export default rootReducer;
