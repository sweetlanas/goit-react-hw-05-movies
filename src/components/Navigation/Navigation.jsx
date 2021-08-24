import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    borderRadius: "10px",
    backgroundColor: "rgba(0, 170, 238, 0.8)",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: "0px",
  },
  navListItem: {
    padding: "20px",
  },
  link: {
    textDecoration: "none",
  },
};

const Navigation = () => {
  return (
    <div style={styles.container}>
      <header>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navListItem}>
              <NavLink style={styles.link} to="/">
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </NavLink>
            </li>
            <li style={styles.navListItem}>
              <NavLink style={styles.link} to="/movies">
                <Button variant="contained" color="primary">
                  Movies
                </Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
