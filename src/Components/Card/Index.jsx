import { useState } from "react";
import "./Styles.css";

const Card = ({ title, text, season, episodes, genre1, genre2, genre3 }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="card">
      <h2 className="subtitulo subtitulo-hover">{title}</h2>
      <p className="texto">
        {text.length > 150
          ? showText
            ? (text = text)
            : (text = text.substring(0, 150) + "...")
          : (text = text)}
      </p>
      <input
        type="button"
        value={showText ? "Mostrar Menos" : "Mostrar Mais"}
        className="texto btn__geral"
        onClick={() => setShowText(!showText)}
      />
      <div>
        <span className="texto">Temporadas: {season}</span>
        <span className="texto">Episódios: {episodes}</span>
      </div>
      <div>
        {genre1 !== undefined && (
          <span className="texto genre-card">{genre1}</span>
        )}
        {genre2 !== undefined && (
          <span className="texto genre-card">{genre2}</span>
        )}
        {genre3 !== undefined && (
          <span className="texto genre-card">{genre3}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
