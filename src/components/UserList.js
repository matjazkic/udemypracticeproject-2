import React from "react";

const UserList = () => {
  const dummyData = [
    { key: Math.random(), Name: "blabla", Age: 19 },
    { key: Math.random(), Name: "b22222lab222la", Age: 9 },
    { key: Math.random(), Name: "blab222la", Age: 139 },
  ];

  return (
    <div>
      {dummyData.map((dumbData) => (
        <ul>
          <li>{dumbData.key}</li>
          <li>{dumbData.Name}</li>
          <li>{dumbData.Age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserList;
