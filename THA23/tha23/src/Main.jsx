import { useEffect } from "react";
import useQuery from "./useQuery";
let rand = 100;
const Main = () => {
    return (
        <div className="main">
            <button onClick={()=>{
                console.log("clicked");
                rand = getRand();
            }}>Change</button>
            <img src={useQuery(rand).response} alt = ""/>
        </div>
    );
}
export default Main;

const getRand = () => {
    var rand = Math.floor(Math.random() * (1084));
    console.log(rand);
    return rand;
}