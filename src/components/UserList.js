import React from "react";

const UserList = (props) => {

  return (
    <div>
      {props.dataList.map((data, index) => (
        <ul key={index} >
          <li>{data.username}</li>
          <li>{data.age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserList;
