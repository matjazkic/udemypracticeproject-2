import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "./Card.js";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Wrapper from './Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  // user!
  const [user, setUser] = useState({ username: "", age: "" });
  const [error, setError] = useState();

  // we create submit handler for the button and also add the passed down listhandler to recive data into parent
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(user);

    if (!(user.username.trim().length > 0)) {
      setError({
        title: "Invalid output",
        message: "please check if name has at least 1 letter ",
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: "Invalid output",
        message: "please check if age is 1 or greater",
      });
      return;
    }

    {
      props.addHandler(user);
      console.log(user);
      setUser({ username: "", age: "" });
    }
  };

  // input handler which is made so can be used on many inputs with correct function at onChange in html
  const changeHandler = (inputField, value) => {
    setUser((prevUser) => {
      return { ...prevUser, [inputField]: value };
    });
  };

  
  const errorReset = (props) => {
    setError('')
    setUser({ username: "", age: "" });
    };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} error={errorReset} />}
      <Card className={styles.input}>
        <form>
          <label>Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(event) => changeHandler("username", event.target.value)}
            ref={nameInputRef}
          ></input>
          <label>Age (years)</label>
          <input
            id="age"
            value={user.age}
            type="number"
            onChange={(event) => changeHandler("age", event.target.value)}
            ref={ageInputRef}
          ></input>
          <Button type={"submit"} onClick={submitHandler}>
            Add user biach
          </Button>
          {/*   /* <button type="submit" onClick={submitHandler}>
          Add User
        </button> */}
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
