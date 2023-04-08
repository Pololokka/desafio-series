import "./App.css";

import Card from "./Components/Card/Index";
import Input from "./Components/Input/Index";

import { Produtos } from "./Data/db";

function App() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <main>
      <p className="subtitulo subtitulo-hover">Filtragem de Séries</p>
      <div className="inputs__container">
        <Input
          title="Nome"
          type="text"
          name="title"
          handleOnChange={handleOnChange}
        />
        <Input
          title="Gênero"
          type="text"
          name="genre"
          handleOnChange={handleOnChange}
        />
      </div>
      <div className="inputs__container">
        <Input
          title="Número de Temporadas"
          type="number"
          name="season"
          min={0}
          handleOnChange={handleOnChange}
        />
        <Input
          title="Número de Episódios"
          type="number"
          name="episodes"
          min={0}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className="app__cards">
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
      </div>
    </main>
  );
}

export default App;
