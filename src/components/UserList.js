import React from "react";

const UserList = (props) => {
  const dataList = [props.dataList];

  return (
    <div>
      {dataList.map((data) => (
        <ul>
          <li>{data.username}</li>
          <li>{data.age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserList;
