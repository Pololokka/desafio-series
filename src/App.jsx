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
    filter();
    console.log(formFilter);
  }, [formFilter]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    setFormFilter({ ...formFilter, [name]: event.target.value });
  };

  const textFilter = (atr, query) => {
    const regex = new RegExp(query, "i");
    return regex.test(atr);
  };

  const numberFilter = (atr, query) => {
    const regex = new RegExp(query);
    return regex.test(atr);
  };

  const filter = () => {
    const arrayZaq = Produtos.filter(
      (element) =>
        textFilter(element.name, formFilter.name) &&
        textFilter(element.genres, formFilter.genre) &&
        numberFilter(element.episodes, formFilter.episodes) &&
        numberFilter(element.seasons, formFilter.seasons)
    );
    console.log(arrayZaq);

    setArrayFiltered(arrayZaq);
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
            name="seasons"
            min={0}
            formFilter={formFilter.seasons}
            handleOnChange={handleOnChange}
            handleOnWheel={(e) => e.target.blur()}
          />
          <Input
            title="Número de Episódios"
            type="number"
            name="episodes"
            min={0}
            formFilter={formFilter.episodes}
            handleOnChange={handleOnChange}
            handleOnWheel={(e) => e.target.blur()}
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
