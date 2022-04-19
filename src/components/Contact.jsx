import Navigation from "./layout/Navigation";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className="Contact">
      <Navigation />
      <div className={classes.contactContainer}>
        <div className={classes.upperMedia}></div>
        <div className={classes.formContainer}></div>
      </div>
    </div>
  );
}

export default Contact;
