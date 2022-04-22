import { useState } from "react";
import Navigation from "./layout/Navigation";
import classes from "./Contact.module.css";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadAllContacts } from "../features/allContacts";
import { takeContactInfo } from "../features/contact";

function Contact() {
  const contact = useSelector((state) => state.contact.value);

  const allContacts = useSelector((state) => state.allContacts.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  /*  
  city: "London"
  country: "England"
  email: "eng.eugine@gomail.com"
  firstName: "Eugene"
  id: 4
  isFavorite: false
  image: "https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  lastName: "Forige"
  phoneNumber: "+932550221"
  website: "eugine.com" 
*/

  const toggleFavoriteOfNot = (id) => {
    console.log(id);

    const indexOfContact = allContacts.findIndex(
      (contact) => contact.id === id
    );
    let isFavorite = allContacts[indexOfContact].isFavorite;
    const newAllContacts = JSON.parse(JSON.stringify(allContacts));
    newAllContacts[indexOfContact].isFavorite = !isFavorite;
    isFavorite = newAllContacts[indexOfContact].isFavorite;
    console.log(indexOfContact);
    console.log(newAllContacts);
    dispatch(uploadAllContacts(newAllContacts));

    const newContactInfo = { ...contact, isFavorite: isFavorite };
    dispatch(takeContactInfo(newContactInfo));
  };

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [city, setCity] = useState(contact.city);
  const [country, setCountry] = useState(contact.country);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [email, setEmail] = useState(contact.email);
  const [website, setWebsite] = useState(contact.website);

  const submitHandler = (event) => {
    event.preventDefault();
    // Preparing contact data to send to the "users" localStorage
    const contactSubmitInfo = {
      ...contact,
      firstName,
      lastName,
      city,
      country,
      phoneNumber,
      email,
      website,
    };

    const id = contactSubmitInfo.id;
    const indexOfContact = allContacts.findIndex(
      (contact) => contact.id === id
    );

    const newAllContacts = JSON.parse(JSON.stringify(allContacts));
    newAllContacts[indexOfContact] = contactSubmitInfo;
    dispatch(uploadAllContacts(newAllContacts));

    // Navigate to Main page
    navigate("/");
  };

  return (
    <div className="Contact">
      <Navigation />
      <div className={classes.contactContainer}>
        <div className={classes.upperMedia}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={contact.image} alt="contact" />
          </div>
          <div>
            {contact.isFavorite ? (
              <FaHeart
                style={{ color: "red" }}
                className={classes.heart}
                onClick={() => {
                  toggleFavoriteOfNot(contact.id);
                }}
              />
            ) : (
              <FaRegHeart
                className={classes.heart}
                onClick={() => {
                  toggleFavoriteOfNot(contact.id);
                }}
              />
            )}
          </div>
        </div>
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.leftPart}>
              <div className={classes.field}>
                <label>First name:</label>
                <input
                  type="text"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={classes.field}>
                <label>City:</label>
                <input
                  type="text"
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className={classes.field}>
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className={classes.field}>
                <label>Website:</label>
                <input
                  type="text"
                  value={website}
                  required
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <div className={classes.rightPart}>
              <div className={classes.field}>
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={classes.field}>
                <label>Country:</label>
                <input
                  type="text"
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className={classes.field}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.formButtonContainer}>
                <button className={classes.formButton}>Save Contact</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
