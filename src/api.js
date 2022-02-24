//Base url
const base_url = "https://api.rawg.io/api/";
// API KEY
const API_KEY = process.env.REACT_APP_API_KEY;
//Dates
const currentDate = () => {
  return new Date().toISOString().slice(0, 10);
};
const currentYear = new Date().getFullYear();
const currentMonth = currentDate().slice(5, 7);
const currentDay = currentDate().slice(8, 10);
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games url
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate()}&ordering=-rating&page_size=10`;
export const popularGamesUrl = () => `${base_url}${popular_games}`;

//Upcoming games url
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate()},${nextYear}&ordering=-added&page_size=10`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

//New games url
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate()}&ordering=-released&page_size=10`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//Game details url
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;

//Game screenshots url
export const gameScreenshotsUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;

//Searched game
export const searchGameUrl = (game_name) =>
  `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=6`;

// https://api.rawg.io/api/games/674748/screenshots?key=4e99741e719c434595e23c9546cd50ca
