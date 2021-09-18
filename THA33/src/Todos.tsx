import React, {useState,useContext} from 'react'
import TodoList  from './TodoList';
import { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext";

interface Props {
    /* title: string,
    description: string */
    title: string,
    done: boolean
  }

  
const Todos = () => {
    const [todos, setTodos] = useState<Props[]>([]);
    const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext);
    const [input, setInput] = useState<string>("");
    return (
        <div>
            <div className={theme?"todos dark":"todos"}>
                <input type="text"  value={input} onChange={(e) => {
                    setInput(e.target.value);
                }} onKeyPress={(e) =>{
                    if(e.key === "Enter"){
                        setTodos([
                            ...todos,
                            {title: input, done:false},
    
                        ]);
                        setInput("");
                    }}
                }/>
                <button onClick={() => {
                    setTodos([
                        ...todos,
                        {title: input, done:false},

                    ]);
                    setInput("");
                }}>Add Todo</button>
        {todos.map((todo, index) => (
          <TodoList title={todo.title} done={todo.done} />
        ))}
      </div>
        </div>
    )
}

export default Todos
