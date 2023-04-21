import GameDb from "./utils/data/data";

const gameDb = new GameDb
console.log(gameDb.numGames)

function App() {
  return <div>hello world</div>;
}

fetch('data/json/game-data.json')
.then((a) => a.json())
.then(a => console.log(a))

export default App;
