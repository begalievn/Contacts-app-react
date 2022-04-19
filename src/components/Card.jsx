import classes from "./Card.module.css";
import locationIcon from "../images/location-icon.svg";
import phoneIcon from "../images/phone-icon.svg";
import internetIcon from "../images/internet-icon.svg";
import mailIcon from "../images/mail-icon.svg";
import { FaRegHeart } from "react-icons/fa";

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
          <FaRegHeart
            onClick={() => {
              console.log("Icon has been clicked");
            }}
            style={{ fontWeight: "normal" }}
          />
          {/* <FaHeart style={{ color: "red" }} /> */}
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
          <button className={classes.showButton}>show</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
