import React from "react";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const submitHandler = () => {};

  return (
    <div className={styles.input}>
      <div>
        <div>
          <label>Username</label>
          <input></input>
        </div>

        <div>
          <label>Age (years)</label>
          <input></input>
        </div>
      </div>
      <button type="submit">Add User</button>
    </div>
  );
};

export default AddUser;
