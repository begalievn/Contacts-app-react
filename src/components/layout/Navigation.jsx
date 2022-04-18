import classes from "./Navigation.module.css";
import titleIcon from "../../images/title-icon.svg";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes.titleContainer}>
        <img src={titleIcon} alt="title-icon" />
        <h1 className={classes.title}>My Contacts</h1>
      </div>
    </nav>
  );
}

export default Navigation;
