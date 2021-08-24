import FilmListItem from "./FilmListItem";
import s from "./FilmList.module.css";

const FilmList = ({ films, query }) => {
  return (
    <ul className={s.filmList}>
      {films.map((film) => (
        <FilmListItem query={query} key={film.id} film={film} />
      ))}
    </ul>
  );
};

export default FilmList;
