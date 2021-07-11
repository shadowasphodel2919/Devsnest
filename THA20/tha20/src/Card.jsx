const Card = (obj) => {
    const {head, body, index, item, setitem} = obj;
    return (
        <div className="card">
            <div className="headPart">
                <div className="head">{head}</div>
                <button 
                className = "del"
                onClick={()=>{
                    const newItems = item.filter((item,id)=>id!=index);
                    setitem(newItems);
                    console.log(newItems);
                }}>Delete</button>
            </div>
            <div className="body">you have consumed {body} cals.</div>
        </div>
    );
};
export default Card;