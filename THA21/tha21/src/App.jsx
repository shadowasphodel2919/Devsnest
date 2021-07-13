import Card from './Card';
import EditCard from './EditCard';
import React, { useState } from 'react';
import './App.css';

const Options = () => {
  const [item,setitem] = useState([]);
  let array = [];

  for(let i = 0; i < item.length; i++){
    array.push(
      <Card head = {item[i].head} body = {item[i].body}
      index = {i} item = {item} setitem = {setitem}></Card>
    );
  }
  return (
    <div className="main">
        <div className = "main-head">Calorie Read Count</div>
        <EditCard item = {item} setitem = {setitem}></EditCard>
          <div className="block">
            
            {(array.length===0)?<div className="empty">Start Adding Items</div>:array}
          </div>
      </div>
  );
};

function App() {
  return (
    <div className="App">
      {Options()}
    </div>
  );
}

export default App;
