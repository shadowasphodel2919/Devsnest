const initialState ='';
const changeEmail = (state=initialState, action) => {
    
    if (action.type === "CHNG_EML"){
        //initialState=action.email;
        state = action.payload;
        console.log(state);
        return state;
    }
    return state;
};
export default changeEmail;