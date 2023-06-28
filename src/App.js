import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  // we create a list for usage
  const [users, setUsers] = useState([]);

  // in this function we get data from child component and set it to inputed values + old values in array
  const addUser = (users) => {
    setUsers((seznam) => {
      return [
        ...seznam,
        {
          key: Math.random().toString(),
          username: users.username,
          age: users.age,
        },
      ];
    });
  };
  return (
    <div>
      <AddUser addHandler={addUser} />
      <UserList dataList={users} />
    </div>
  );
}

export default App;
