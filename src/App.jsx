import "./App.css";

import Card from "./Components/Card/Index";

import { Produtos } from "./Data/db";

function App() {
  return (
    <main className="App">
      {Produtos.map((element) => {
        return (
          <Card
            key={element.id}
            title={element.name}
            text={element.description}
            season={element.seasons}
            episodes={element.episodes}
            genre1={element.genres[0]}
            genre2={element.genres[1]}
            genre3={element.genres[2]}
          />
        );
      })}
    </main>
  );
}

export default App;
