import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";


function App() {
// we create a list for usage
  const [dataList, setDataList] = useState([]);

  // in this function we get data from child component and set it to inputed values + old values in array
  const listHandler = (dataList) => {
    
      setDataList((seznam) => {
        return [
          ...seznam,
          {
            key: Math.random().toString(),
            username: dataList.username,
            age: dataList.age,
          },
        ];
      });
    
};
  return (
    <div>
      <AddUser listHandler={listHandler} />
      <UserList dataList={dataList} />
    </div>
  );
}

export default App;
