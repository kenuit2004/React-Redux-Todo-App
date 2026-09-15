import {useDispatch} from "react-redux"
import {add} from "./reducers.jsx"
import {useState} from "react"
function AddTodo()
{
    const [todo,setTodo]=useState("");
    const dispatch=useDispatch();
    return(
        <div>
            <input type="text" placeholder="Enter the name" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={()=>{
                dispatch(add({item:todo}));
                setTodo("");
            }}>Add Todo</button>
        </div>
    );
}
export default AddTodo;