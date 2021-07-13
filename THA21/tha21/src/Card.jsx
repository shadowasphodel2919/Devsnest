import { useState } from "react";

const Card = (obj) => {
    const {head, body, index, item, setitem} = obj;

    const [editing, setediting] = useState(false);


    return (
        <div className="card">
            <div className="headPart">
                {editing?(
                    <input
                    type = 'text'
                    name = 'head'
                    id = 'head'
                    required
                    value = {head}
                    /*onChange = {e => setitem(item.map((item, i) => (i === index ? {...item, ...e.target.value} : item)))}*/></input>
                ) : (
                    <div className="head">{head}</div>
                )}               

                <button 
                className = "edit" onClick={() => setediting(!editing)}>
                    {editing?'Done':'Edit'}</button>

                <button 
                className = "del"
                onClick={()=>{
                    const newItems = item.filter((item,id)=>id!==index);
                    setitem(newItems);
                    console.log(newItems);
                }}>Delete</button>

            </div>

            {editing?(<input
                    type = 'text'
                    name = 'body'
                    id = 'body'
                    required
                    value = {body}
                    onChange = {e => setitem()}></input>
                ):(
                <div className="body">you have consumed {body} cals.</div>
                )}
            
        </div>
    );
};
export default Card;