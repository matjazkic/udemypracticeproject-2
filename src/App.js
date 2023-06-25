import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [dataList, setDataList] = useState([]);

  const listHandler = (dataList) => {
    setDataList(dataList);
  };

  return (
    <div>
      <AddUser listHandler={listHandler} />
      <UserList dataList={dataList} />
    </div>
  );
}

export default App;
