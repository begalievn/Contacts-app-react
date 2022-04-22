import classes from "./Navigation.module.css";
import titleIcon from "../../images/title-icon.svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.titleContainer}>
        <img src={titleIcon} alt="title-icon" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={classes.title}>My Contacts</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
