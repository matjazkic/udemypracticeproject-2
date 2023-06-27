import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "./Card.js";
import Button from "./Button";

const AddUser = (props) => {
  const [dataList, setDataList] = useState("");
console.log(dataList)

  // we create submit handler for the button and also add the passed down listhandler to recive data into parent
  const submitHandler = (event) => {
    event.preventDefault();
    if(dataList.username.trim().length > 0 && +dataList.age > 1)
    {props.listHandler(dataList);
    console.log(dataList);
    setDataList({ username: '', age: '' })}
    else {
      return

    }
  };

  // input handler which is made so can be used on many inputs with correct function at onChange in html
  const changeHandler = (input, value) => {
    setDataList((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <Card className={styles.input}>
      <form>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={dataList.username}
          onChange={(event) => changeHandler("username", event.target.value)}
        ></input>
        <label>Age (years)</label>
        <input
          id="age"
       value={dataList.age}
          type="number"
          onChange={(event) => changeHandler("age", event.target.value)}
        ></input>
        <Button type={'submit'} onClick={submitHandler}>Add user biach</Button>
        {/*   /* <button type="submit" onClick={submitHandler}>
          Add User
        </button> */}
      </form>
    </Card>
  );
};

export default AddUser;
