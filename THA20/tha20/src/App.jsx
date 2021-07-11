import Card from './Card';
import React, { useState } from 'react';
import './App.css';

const Options = () => {
  const [item,setitem] = useState([
    {
      head : "Pizza", body : "56"
    },
    {
      head : "Burger", body : "69"
    },
    {
      head : "Coke", body : "500"
    },
    {
      head : "Brownie", body : "180"
    },
    {
      head : "Fried Rice", body : "90"
    },
    {
      head : "Lassagne", body : "200"
    },
    {
      head : "Pani Puri", body : "10"
    }
  ]);
  let array = [];

  for(let i = 0; i < item.length; i++){
    array.push(
      <Card head = {item[i].head} body = {item[i].body}
      index = {i} item = {item} setitem = {setitem}></Card>
    );
  }
  return array;
};
const Cards = () => {
  //console.log(item);
  return (
          <div className="block">
            {Options()}
          </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className = "main-head">Calorie Read Count</div>
            {Cards()}
      </div>
    </div>
  );
}

export default App;
