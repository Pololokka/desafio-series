import "./Styles.css";

const Card = ({ title, text, season, episodes, genre1, genre2, genre3 }) => {
  return (
    <div className="card">
      <h2 className="subtitulo subtitulo-hover">{title}</h2>
      <p className="texto">{text}</p>
      <div>
        <span className="texto">{season}</span>
        <span className="texto">{episodes}</span>
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
