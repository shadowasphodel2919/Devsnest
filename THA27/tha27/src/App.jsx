import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

export default function App(){

  return (
    <div className="App">
      <h1>Todo List Using Redux</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}