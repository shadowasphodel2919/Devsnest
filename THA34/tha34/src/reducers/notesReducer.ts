interface addNoteAction{
    type: string;
    payload: number;
}
interface deleteNoteAction{
    type: string;
    payload: number;
}

type ActionType = addNoteAction | deleteNoteAction;

const notesReducer = (state: string[] = [], action: ActionType) => {
    switch(action.type){
        case 'ADD_NOTE':
            return [...state,action.payload];
        case 'DELETE_NODE':
            return state.filter((_:string, index:number) => index !== action.payload);
        default:
            return state;
    }
};
export default notesReducer;