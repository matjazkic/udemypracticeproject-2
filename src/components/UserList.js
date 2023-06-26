import React from "react";

const UserList = (props) => {
  const myList = props.dataList;
  console.log(props.dataList)
  console.log(myList)

  return (
    <div>
      {props.dataList.map((listItem) => (
        <ul>
          <li>{listItem.username}</li>
          <li>{listItem.age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserList;
