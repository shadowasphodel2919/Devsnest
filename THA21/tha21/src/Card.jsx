import { useState } from "react";

const Card = (obj) => {
    const {head, body, index, item, setitem} = obj;

    const [editing, setediting] = useState(false);

    const [headEdit, setheadEdit] = useState(head);

    const [bodyEdit, setbodyEdit] = useState(body);


    return (
        <div className="card">
            <div className="headPart">
                {editing?(
                    <input type = "text"
                    className = "headEdit"
                    name = "head"
                    id = "head"
                    required
                    defaultValue = {headEdit}
                    onChange={(e)=>{
                        let newItem = item;
                        newItem[index].head = e.target.value;
                        console.log(newItem[index].head);
                        setitem(newItem);
                        setheadEdit(e.target.value);
                        console.log(headEdit);
                    }}></input>
                ):(
                    <div className="head">{headEdit}</div>
                )}                     

                <button 
                className = "edit"
                onClick = {()=>{setediting(!editing)}}>
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
                defaultValue = {bodyEdit}
                onChange={(e)=>{
                    let newItem = item;
                    newItem[index].body = e.target.value;
                    console.log(newItem[index].body);
                    setitem(newItem);
                    setbodyEdit(e.target.value);
                    console.log(bodyEdit);
                }}></input>
            ):(
                <div className="body">you have consumed {bodyEdit} cals.</div>
            )}          
        </div>
    );
};
export default Card;