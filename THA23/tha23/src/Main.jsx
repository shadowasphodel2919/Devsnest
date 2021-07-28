import useQuery from "./useQuery";
import useToggle from "./useToggle";
const Main = () => {
    const [isTextChanged, setIsTextChanged] = useToggle();
    const query = useQuery();
    return (
        <div className="main">
            <button onClick={query.getNewURL}>Change</button>
            <img src={query.response} alt = ""/>
            <button onClick={setIsTextChanged}>{isTextChanged?'Toggled':'Click to Toggle'}</button>
        </div>
    );
}
export default Main;