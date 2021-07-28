import { useState } from "react";
const useQuery = () => {
    
    const [response,setResponse] = useState({});
    //setResponse('https://picsum.photos/id/100/info');
    const getNewURL = () => {
        var val = Math.floor(Math.random() * (1084));
        console.log(val);
        var url;
        fetch(`https://picsum.photos/id/${val}/info`)
        .then(res => res.json())
        .then(data => {
            url = data.download_url;
            console.log(url);
            setResponse(url);
        });
    }   
    return ({response,getNewURL});
}
export default useQuery;