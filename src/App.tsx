import GameDb from "./utils/data/data";

const gameDb = new GameDb
const genres = gameDb.genres
const tags = gameDb.tags
console.log(gameDb.showFilter([genres[1]], [tags[3]]))

function App() {
  return <div>hello world</div>;
}

export default App;
