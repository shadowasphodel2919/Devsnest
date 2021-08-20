const incNumber = () => {
    return {
        type:"INC_NUMBER",
    };
};
const decNumber = () => {
    return {
        type:"DEC_NUMBER",
    };
};
const changeUsername = (val) => {
    return {
        type:"CHNG_USR",
        payload :val
    }
}
const changeEmail = (val) => {
    return {
        type:"CHNG_EML",
        payload :val
    };
}

export {incNumber, decNumber, changeUsername, changeEmail};