import "./App.css";
import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import HomePage from "./views/HomePage";
// import MoviesPageSearch from "./views/MoviesPageSearch";
// import MovieDetailsPage from "./views/MovieDetailsPage";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPageSearch = lazy(() => import("./views/MoviesPageSearch"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPageSearch />
          </Route>
          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>

      <Redirect to="/" />
    </div>
  );
}

export default App;
