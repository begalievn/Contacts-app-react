import Card from "../Card";
import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.main}>
      <h1>Main Page</h1>

      <div className={classes.cardsContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
