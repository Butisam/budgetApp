// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Home from "./components/home"
import Login from './components/login';
import Signup from './components/signup';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';


function App() {
  const [transaction, setTransaction] = useState([]);
  const AddTransaction= ((amount, item,transactionType)=>{
  
  setTransaction((items) =>[...items,{
      amount:amount,
      item: item,
      transactionType: transactionType

  }])
  


  })
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/home">
        <Home list={transaction} add={AddTransaction} /> 
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
