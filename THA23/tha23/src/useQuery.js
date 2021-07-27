import { useState , useEffect} from "react";
const useQuery = (val) => {
    
    const [response,setResponse] = useState({});
    useEffect(() => {
        var url;
        fetch(`https://picsum.photos/id/${val}/info`)
    .then(res => res.json())
    .then(data => {
        url = data.download_url;
        setResponse(url);
    });
    },[val]);
    
    return {response}
}
export default useQuery;