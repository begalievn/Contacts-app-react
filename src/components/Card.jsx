import classes from "./Card.module.css";
import locationIcon from "../images/location-icon.svg";
import phoneIcon from "../images/phone-icon.svg";
import internetIcon from "../images/internet-icon.svg";
import mailIcon from "../images/mail-icon.svg";
import { FaRegHeart } from "react-icons/fa";

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}></div>
      <div className={classes.content}>
        <div className={classes.titleDiv}>
          <h2 className={classes.titleH2}>Vanessa</h2>
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
            />{" "}
            Lorem ipsum dolor{" "}
          </p>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={phoneIcon}
              alt="phone-icon"
            />
            Lorem ipsum dolor{" "}
          </p>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={internetIcon}
              alt="internet-icon"
            />
            Lorem ipsum dolor{" "}
          </p>
          <p className={classes.info}>
            <img
              className={classes.contactIcons}
              src={mailIcon}
              alt="mail-icon"
            />
            Lorem ipsum dolor{" "}
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
