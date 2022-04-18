import { getAllUsers } from "../../api";
import Card from "../Card";
import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.container}>
      <h1>Main Page</h1>
      <Card />
      <button onClick={getAllUsers}>Click Me</button>
    </div>
  );
}

export default Main;
