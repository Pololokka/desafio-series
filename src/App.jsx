import { useEffect, useState } from "react";
import "./App.css";

import Card from "./Components/Card/Index";
import Input from "./Components/Input/Index";

import { Produtos } from "./Data/db";

const initialForm = {
  name: "",
  genre: "",
  seasons: "",
  episodes: "",
};

function App() {
  const [formFilter, setFormFilter] = useState(initialForm);
  const [arrayFiltered, setArrayFiltered] = useState(Produtos);

  useEffect(() => {
    const arrayZaq = Produtos.filter((element) => {
      return (
        element.name.includes(formFilter.name.toLocaleUpperCase()) ||
        element.genres.includes(formFilter.genre)
      );
    });

    setArrayFiltered(arrayZaq);
    console.log(formFilter);
  }, [formFilter]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    setFormFilter({ ...formFilter, [name]: event.target.value });
  };

  return (
    <main>
      <section>
        <p className="subtitulo subtitulo-hover">Filtragem de Séries</p>
        <div className="inputs__container">
          <Input
            title="Nome"
            type="text"
            name="name"
            formFilter={formFilter.name}
            handleOnChange={handleOnChange}
          />
          <Input
            title="Gênero"
            type="text"
            name="genre"
            formFilter={formFilter.genre}
            handleOnChange={handleOnChange}
          />
        </div>
        <div className="inputs__container">
          <Input
            title="Número de Temporadas"
            type="number"
            name="season"
            min={0}
            formFilter={formFilter.season}
            handleOnChange={handleOnChange}
          />
          <Input
            title="Número de Episódios"
            type="number"
            name="episodes"
            min={0}
            formFilter={formFilter.episodes}
            handleOnChange={handleOnChange}
          />
        </div>
      </section>

      <section className="app__cards">
        {arrayFiltered?.map((element) => {
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
      </section>
    </main>
  );
}

export default App;
