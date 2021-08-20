const initialState ='';
const changeUsername = (state=initialState, action) => {
    
    if (action.type === "CHNG_USR"){
        state = action.payload;
        console.log(state);
        return state;
    }
    return state;
};
export default changeUsername;