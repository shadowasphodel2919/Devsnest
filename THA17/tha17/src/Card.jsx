const Card = (obj) => {
    let s = obj.head;
    return (
        <div className="card">
            <div className="head">{obj.head}</div>
            <div className="body">you have consumed {obj.body} cals.</div>
        </div>
    );
};
export default Card;