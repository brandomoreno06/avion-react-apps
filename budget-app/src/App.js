import {useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";

const usersData = [
  { 
    firstName: "avion",
    lastName: "school",
    email: "avion@gmail.com",
    contact: "0921",
    username: "avion",
    password: "qwerty",
    isLoggedIn: false
  },
  { 
    firstName: "a",
    lastName: "school2",
    email: "avion2@gmail.com",
    contact: "0921",
    username: "a",
    password: "a",
    isLoggedIn: false
  }
];


function App() {
  localStorage.clear()
  let accountsDataBase = JSON.parse(localStorage.getItem("accountsDataBase"))
  accountsDataBase = accountsDataBase ?  accountsDataBase : usersData;
  
  const [users, setUsers] = useState(accountsDataBase);
  const addUserHandler = (newUser) => {
    setUsers((oldUsers) => {
      return [newUser, ...oldUsers];
    })
  }
  //Store users in local storage after state has changed
  useEffect(() => localStorage.setItem("accountsDataBase", JSON.stringify(users)));

  const expensesHandler = (expenses) => {
    console.log(expenses)
  }
  

  return (
    <div className="App">
      <Header />
      <MainSection registerUsers={addUserHandler} registeredAccounts={users} expensesHandler={expensesHandler} />
    </div>
  );
};

export default App;
