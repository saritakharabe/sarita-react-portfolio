import React, { useState } from "react";
import validateEmail from "../../utils/helpers";

const styles = {
  body: {
    background: "grey",
    height: 525,
    width: 750,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    color: "white",
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  },
  text: {
    color: "white",
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  },
  label: {
    color: "white",
    fontSize: 20,
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  },
  messageBody: {
    height: 100,
  },
  submitBtn: {
    marginTop: 25,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default function Contact() {
  // below are the useState variables needed to take user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //function to handle input change once user types in values
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  //function that alerts user if their mouse leaves a field without writing content
  const mouseHandler = (e) => {
    const { value, name } = e.target;
    if (name === "name" && value.trim() === "") {
      setErrorMessage("Please Enter Your Name!");
    } else if (name === "email" && value.trim() === "") {
      setErrorMessage("Please Enter Your Email!");
    } else if (name === "message" && value.trim() === "") {
      setErrorMessage("Please Enter your Message!");
    } else {
      setErrorMessage("");
    }
  };
  //function to handle the form submit and alerts user if their email is invalid/a section is blank
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (!validateEmail(email)) {
      setErrorMessage("Your email is invalid. Please try again!");
      return;
    }
    if (name === "name" && value.trim() === "") {
      setErrorMessage("Enter Your Name!");
      return;
    }
    if (name === "email" && value.trim() === "") {
      setErrorMessage("Enter Your Email!");
      return;
    }
    if (name === "message" && value.trim() === "") {
      setErrorMessage("Your Message!");
    }
    alert(`Thanks for reaching out to me ${name}!`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    // form with input conditions passed in
    <div className="card" style={styles.body}>
      <div className="card-body">
        <h1 style={styles.header}>Contact Me</h1>
        <form className="form">
          <label style={styles.label}>Name</label>
          <input
            className="form-control"
            value={name}
            name="name"
            onChange={handleInputChange}
            onMouseLeave={mouseHandler}
            type="text"
            placeholder="Enter Your Name"
          />
          <label style={styles.label}>Email</label>
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            onMouseLeave={mouseHandler}
            type="email"
            placeholder="Enter your Email"
          />
          <label style={styles.label}>Message</label>
          <textarea
            className="form-control"
            style={styles.messageBody}
            value={message}
            name="message"
            onChange={handleInputChange}
            onMouseLeave={mouseHandler}
            type="text"
            placeholder="Enter your Message"
          />
          {errorMessage && (
            <div>
              <p style={styles.text}>{errorMessage}</p>
            </div>
          )}
          <button
            type="button"
            className="form-control"
            style={styles.submitBtn}
            onClick={handleFormSubmit}
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}
