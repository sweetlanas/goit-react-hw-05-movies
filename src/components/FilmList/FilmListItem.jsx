import { Link, useLocation } from "react-router-dom";
import s from "./FilmListItem.module.css";

const FilmListItem = ({ film, query }) => {
  const location = useLocation();
  // const { path } = useRouteMatch();
  // console.log(path);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const defaultPoster =
    "https://media.comicbook.com/files/img/default-movie.png";

  return (
    <li className={s.filmListItem}>
      <Link
        className={s.filmListItemLink}
        to={{
          pathname: `/movies/${film.id}`,
          state: {
            search: query !== undefined ? query : "",
            id: film.id,
            from: location.pathname,
          },
        }}
      >
        <img
          src={
            film?.poster_path !== null && film?.poster_path !== undefined
              ? imgUrl + film.poster_path
              : defaultPoster
          }
          alt={film.title}
          width="200"
        />
        <p>{film.title}</p>
      </Link>
    </li>
  );
};

export default FilmListItem;
