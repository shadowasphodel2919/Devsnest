import { useState } from "react";

const Card = (obj) => {
    const {head, body, index, item, setitem} = obj;

    const [editing, setediting] = useState(false);

    return (
        <div className="card">
            <div className="headPart">
                {editing?(
                    <input type = "text"
                    className = "headEdit"
                    name = "head"
                    id = "head"
                    required
                    defaultValue = {item[index].head}
                    onChange={(e)=>{
                        let newItem = item;
                        newItem[index].head = e.target.value;
                        setitem(newItem);
                    }}></input>
                ):(
                    <div className="head">{item[index].head}</div>
                )}                     

                <button 
                className = "edit"
                onClick = {()=>{
                    setediting(!editing);
                    console.log(item);
                    }}>
                    {editing?'Done':'Edit'}
                </button>

                <button className = "del"
                onClick={()=>{
                    const newItems = item.filter((item,id)=>id!==index);
                    setitem(newItems);
                    console.log(newItems);
                }}>Delete</button>
            </div>    
            {editing?(
                <input type = "number"
                className = "bodyEdit"
                name = "body"
                id = "body"
                required
                defaultValue = {item[index].body}
                onChange={(e)=>{
                    let newItem = item;
                    newItem[index].body = e.target.value;
                    setitem(newItem);
                }}></input>
            ):(
                <div className="body">you have consumed {item[index].body} cals.</div>
            )}          
        </div>
    );
};
export default Card;