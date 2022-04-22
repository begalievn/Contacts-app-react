import Card from "../Card";
import { useEffect, useState } from "react";
import classes from "./Main.module.css";
import { getAllUsers } from "../../api";
import favoritesIcon from "../../images/favorites-icon.svg";
import sortAtoZIcon from "../../images/sortAtoZ-icon.svg";
import sortZtoAIcon from "../../images/sortZtoA-icon.svg";
import activeSortAtoZIcon from "../../images/activeSortAtoZ-icon.svg";
import activeSortZtoAIcon from "../../images/activeSortZtoA-icon.svg";
import { useSelector } from "react-redux";

function Main() {
  const allContacts = useSelector((state) => state.allContacts.value);

  const [searchInputValue, setSearchInputValue] = useState("");
  const [isAtoZSelected, setAtoZSelected] = useState(true);
  const [isZtoASelected, setZtoASelected] = useState(false);
  const [isFavoritesSelected, setFavortesSelected] = useState(false);

  useEffect(() => {
    if (localStorage.users === undefined) {
      getAllUsers().then((response) => {
        const contactsFromResponse = response.data.data;
        const newContactsFromResponse = contactsFromResponse.map((contact) => {
          return (contact = { ...contact, isFavortie: false });
        });
        console.log(newContactsFromResponse);
        localStorage.setItem("users", JSON.stringify(newContactsFromResponse));
        console.log("request has been sent to get users from server");
      });
    }

    if (localStorage.favorites === undefined) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, []);

  const displayCardsAtoZ = (usersArr) => {
    const arrtoDisplay = [...usersArr];
    arrtoDisplay.sort((a, b) => a.firstName.localeCompare(b.firstName));
    return arrtoDisplay;
  };

  const displayCardsZtoA = (usersArr) => {
    const arrtoDisplay = [...usersArr];
    arrtoDisplay.sort((a, b) => b.firstName.localeCompare(a.firstName));
    return arrtoDisplay;
  };

  const displayCardsFavorites = () => {
    const arrtoDisplay = allContacts.filter((contact) => contact.isFavorite);
    return arrtoDisplay;
  };

  const displayCardsFromSearchField = () => {
    const re = new RegExp("^" + searchInputValue + ".*", "i");
    const arrtoDisplay = allContacts.filter(
      (contact) => contact.firstName.match(re) || contact.lastName.match(re)
    );
    return arrtoDisplay;
  };

  const decideWhichCardsToDisplay = () => {
    let cardsToDisplay = allContacts;
    if (searchInputValue.length > 0) {
      cardsToDisplay = displayCardsFromSearchField();
    } else if (isAtoZSelected) {
      cardsToDisplay = displayCardsAtoZ(cardsToDisplay);
    } else if (isZtoASelected) {
      cardsToDisplay = displayCardsZtoA(cardsToDisplay);
    } else if (isFavoritesSelected) {
      cardsToDisplay = displayCardsFavorites();
    }

    return cardsToDisplay;
  };

  const displayCards = (usersArr) => {
    return usersArr.map((user) => {
      return <Card key={user.id} userData={user} />;
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.configContainer}>
        <div className={classes.searchDiv}>
          <form>
            <input
              className={classes.inputField}
              type="text"
              value={searchInputValue}
              onChange={(event) => {
                setSearchInputValue(event.target.value);
              }}
              placeholder="type to search"
            />
          </form>
        </div>
        <div className={classes.filtersDiv}>
          <img
            className={classes.favoritesIcon}
            src={favoritesIcon}
            alt="favorites"
            onClick={() => {
              setAtoZSelected(false);
              setZtoASelected(false);
              setFavortesSelected(true);
            }}
          />
          <img
            src={isAtoZSelected ? activeSortAtoZIcon : sortAtoZIcon}
            alt="sortAtoZIcon"
            onClick={() => {
              setAtoZSelected(true);
              setZtoASelected(false);
              setFavortesSelected(false);
            }}
          />
          <img
            src={isZtoASelected ? activeSortZtoAIcon : sortZtoAIcon}
            alt="sortZtoAIcon"
            onClick={() => {
              setAtoZSelected(false);
              setZtoASelected(true);
              setFavortesSelected(false);
            }}
          />
        </div>
      </div>
      <div className={classes.cardsContainer}>
        {localStorage.users !== undefined ? (
          displayCards(decideWhichCardsToDisplay())
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
// localStorage.removeItem("users");
export default Main;
