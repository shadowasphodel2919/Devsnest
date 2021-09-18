import React from 'react';
import './App.css';
interface User {
  name: string,
  age: number,
  email: string
}
function App() {
  const user :User = {
    name: 'John Doe',
    age: 30,
    email: "jhon@gmail.com"
  }
  return (
    <div className="App">
      <h1>Apps</h1>
      {
        user === null ? "loading" : (
          <div>
            <h4>{user.name}</h4>
          <h5>{user.age}</h5>
          <h6>{user.email}</h6>
          </div>
        )
      }
    </div>
  );
}

export default App;
