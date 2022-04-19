import { useEffect, useState } from "react";
import Card from "../Card";
import classes from "./Main.module.css";
import { getAllUsers } from "../../api";

function Main() {
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAllUsers().then((response) => {
      localStorage.setItem("users", JSON.stringify(response.data.data));
      setDataLoaded(true);
    });
  }, []);

  const displayCards = (usersArr) => {
    return usersArr.map((user) => {
      console.log(user);
      return <Card userData={user} />;
    });
  };

  return (
    <div className={classes.main}>
      <h1>Main Page</h1>

      <div className={classes.cardsContainer}>
        {isDataLoaded
          ? displayCards(JSON.parse(localStorage.getItem("users")))
          : null}
      </div>
    </div>
  );
}

export default Main;
