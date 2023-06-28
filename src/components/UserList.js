import React from "react";
import Card from "./Card";

const UserList = (props) => {
  // we recieve dataList props which contains data for the list to render
  console.log(props.dataList);

  return (
    <Card>
      {props.dataList.map((listItem, index) => (
        <ul key={index}>
          <li>
            {listItem.username} ( is {listItem.age} years old.)
          </li>
        </ul>
      ))}
    </Card>
  );
};
export default UserList;
