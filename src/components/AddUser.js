import React, { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userData, setUserData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    props.addHandler(userData);
  };

  const changeUsername = (value) => {
    setUserData(prevState => ({age: prevState.age, username: value}))
  };

  const changeAge = (value) => {
    setUserData(prevState =>  ({age: value, username: prevState.username}))
  };

  return (
    <div className={styles.input}>
      <div>
        <div>
          <label>Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) => changeUsername(event.target.value)}
          ></input>
        </div>

        <div>
          <label>Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={(event) => changeAge(event.target.value)}
          ></input>
        </div>
      </div>
      <button type="submit" onClick={submitHandler}>
        Add User
      </button>
    </div>
  );
};

export default AddUser;
