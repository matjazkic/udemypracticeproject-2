import React, { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [dataList, setDataList] = useState([{}]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.listHandler(dataList);
  };

  const changeHandler = (input, value) => {
    setDataList((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <div className={styles.input}>
      <div>
        <div>
          <label>Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) => changeHandler("username", event.target.value)}
          ></input>
        </div>

        <div>
          <label>Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={(event) => changeHandler("age", event.target.value)}
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
