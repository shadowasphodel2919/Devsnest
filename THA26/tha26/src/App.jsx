
import './App.css';
import { incNumber, decNumber, changeUsername, changeEmail } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter);
  const username = useSelector((state) => state.changeUsername);
  const email = useSelector((state) => state.changeEmail);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => {
        dispatch(decNumber());
      }}>-</button>
      <span>{count}</span>
      <button onClick={() => {
        dispatch(incNumber());
      }}>+</button>

      <form>
        <input type="text" className="username" value={username} placeholder="Username" onChange={(e) => {
          dispatch(changeUsername(e.target.value));
        }} />
        <input type="text" className="email" value={email} placeholder="Email" onChange={(e) => {
          dispatch(changeEmail(e.target.value));
        }} />
      </form>
      <h2>Data</h2>
      <div className="data">
        <p>Username:{username}</p>
        <p>Email:{email}</p>
      </div>
    </div>
  );
}

export default App;
