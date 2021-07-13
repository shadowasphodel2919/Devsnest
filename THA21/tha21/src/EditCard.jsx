import { useState } from "react";

const EditCard = (obj) => {
    const {item,setitem} = obj;//useState([]);
    const addItem = i => {
        setitem([...item, i]);
        console.log(item);
    };


    const [head, sethead] = useState('');
    const [body, setbody] = useState('');
    const AddItem = e => {
        e.preventDefault();
        addItem({head, body});
        sethead('');
        setbody('');
        console.log(head);
        console.log(body);
    };
    return (
        <div className="card">
            <div className="formPart">
                <form 
                onSubmit = {AddItem}
                className = "addForm">
                    <div>
                    <input 
                    type = "text"
                    name = "head"
                    value = {head}
                    required
                    onChange = {e => sethead(e.target.value)}
                    className = "headInput"></input>
                    <input 
                    type = "number"
                    name = "body"
                    value = {body}
                    required
                    onChange = {e => setbody(e.target.value)}
                    className = "bodyInput"></input>
                    </div>
                    <div>
                    <button type = "submit" className = "submitButton">ADD</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default EditCard;