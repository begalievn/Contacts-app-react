import classes from "./Card.module.css";
import locationIcon from "../images/location-icon.svg";
import phoneIcon from "../images/phone-icon.svg";
import internetIcon from "../images/internet-icon.svg";
import mailIcon from "../images/mail-icon.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { takeContactInfo } from "../features/contact";
import { useSelector } from "react-redux";
import { uploadAllContacts } from "../features/allContacts";

function Card({ userData }) {
  /*  
  city: "London"
  country: "England"
  email: "eng.eugine@gomail.com"
  firstName: "Eugene"
  id: 4
  image: "https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  lastName: "Forige"
  phoneNumber: "+932550221"
  website: "eugine.com" 
  */

  const dispatch = useDispatch();
  const allContacts = useSelector((state) => state.allContacts.value);

  const takeDataToRedux = (event) => {
    dispatch(takeContactInfo(userData));
    console.log(userData);
  };

  const toggleFavoriteContact = (userData) => {
    const id = userData.id;
    const indexOfContact = allContacts.findIndex(
      (contact) => contact.id === id
    );
    let isFavorite = allContacts[indexOfContact].isFavorite;
    const newAllContacts = JSON.parse(JSON.stringify(allContacts));
    newAllContacts[indexOfContact].isFavorite = !isFavorite;
    dispatch(uploadAllContacts(newAllContacts));
    console.log(indexOfContact);
  };

  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          className={classes.userImage}
          src={userData.image}
          alt="userpicture"
        />
      </div>
      <div className={classes.content}>
        <div className={classes.titleDiv}>
          <h2
            className={classes.titleH2}
          >{`${userData.firstName} ${userData.lastName}`}</h2>
          {userData.isFavorite ? (
            <FaHeart
              id={userData.id}
              style={{ color: "red" }}
              onClick={() => {
                toggleFavoriteContact(userData);
              }}
            />
          ) : (
            <FaRegHeart
              id={userData.id}
              style={{ fontWeight: "normal" }}
              onClick={() => {
                toggleFavoriteContact(userData);
              }}
            />
          )}
        </div>
        <div className={classes.contacts}>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={locationIcon}
              alt="location-icon"
            />
            {`${userData.city} city, ${userData.country}`}
          </p>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={phoneIcon}
              alt="phone-icon"
            />
            {userData.phoneNumber}
          </p>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={internetIcon}
              alt="internet-icon"
            />
            {userData.website}
          </p>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={mailIcon}
              alt="mail-icon"
            />
            {userData.email}
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <Link to="/contact">
            <button
              id={userData.id}
              className={classes.showButton}
              onClick={takeDataToRedux}
            >
              show
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
