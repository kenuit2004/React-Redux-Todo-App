const ken=(state=[],action)=>{
    if(action.type==="ADD_TODO")
    {
        return [...state,action.payload];
    }
    else if(action.type==="REMOVE_TODO")
    {
        return state.filter((item,index)=>index!==action.payload);
    }
    return state;
}
export const add=(item)=>{
    return{
        type:"ADD_TODO",
        payload:item
    }
}
export const sub=(id)=>{
    return{
        type:"REMOVE_TODO",
        payload:id
    }
}
export default ken;