import { useEffect, useState } from "react";
import { getTrendingFilms } from "../services/api";
import FilmList from "../components/FilmList/FilmList";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const {
        data: { results },
      } = await getTrendingFilms();
      setFilms(results);
    };
    fn();
  }, []);
  return <FilmList films={films} />;
};

export default HomePage;
