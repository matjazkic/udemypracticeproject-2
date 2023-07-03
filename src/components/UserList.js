import React from "react";
import Card from "./Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  // we recieve dataList props which contains data for the list to render
  console.log(props.dataList);
 
    return (
      <Card className={styles.users}>
      
        <ul>
          {props.dataList.map((listItem, index) => (
            <li key={index}>
              {listItem.username} ( is {listItem.age} years old.)
            </li>
          ))}
        </ul>
      </Card>
    );
  
};
export default UserList;
