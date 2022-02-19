//Base url
const base_url = "https://api.rawg.io/api/";
// API KEY
const API_KEY = process.env.REACT_APP_API_KEY;
//Dates
const currentDate = () => {
  return new Date().toISOString().slice(0, 10);
};
const currentYear = currentDate().slice(0, 4);
const currentMonth = currentDate().slice(5, 7);
const currentDay = currentDate().slice(8, 10);
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games url
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate()}&ordering=-rating&page_size=10`;

//End result url
export const popularGamesUrl = () => {
  return `${base_url}${popular_games}`;
};
