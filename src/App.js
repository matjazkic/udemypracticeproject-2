import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers]  = useState([]);

  const addUser = (userToAdd) => {
    setUsers(prevState => [...prevState, userToAdd]);
  };

  return (
    <div>
      <AddUser addHandler={addUser} />
      <UserList dataList={users} />
    </div>
  );
}

export default App;
