import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const ToggleTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state_ => state_.theme));
    return (
        <div className="toggle-theme">
            <button className={theme ? "btn btn-light" : "btn-dark"}
            onClick={()=>{
                dispatch(toggleTheme(theme));
            }}>
                {theme ? "Dark" : "Light"}
            </button>
        </div>
    );
};
export default ToggleTheme;