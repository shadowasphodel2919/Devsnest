import React, {useState,useEffect,useContext} from 'react';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css';
import Todos  from './Todos';

interface Props {
  /* title: string,
  description: string */
  title: string,
  done: boolean
}

const App = (/* {title, description}: Props */ {title, done}: Props) => {
  const [counter, setCounter] = useState<number | null>(null);
  const [theme, setTheme] = useState<boolean>(false);
  
  useEffect(() => {
    setCounter(0);
  }, []);
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App"/* {theme?"App dark":"App"} */>
      {/* <h1>{title}</h1>
      <h2>{description}</h2> */}
      <div className="iter">
      {counter !== null ? (
        <div>
        <button onClick={() => {
          setCounter(counter+1);
        }}>+</button>
        <span>{counter}</span>
        <button onClick={() => {
          setCounter(counter-1);
        }}>-</button>
        </div>
      ) : null}
      <Todos />
      <ThemeToggle />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
