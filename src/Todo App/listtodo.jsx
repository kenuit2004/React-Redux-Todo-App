import {useSelector,useDispatch} from "react-redux"
import {sub} from "./reducers.jsx"
function ListTodo()
{
    const name=useSelector(state=>state.todo);
    const dispatch=useDispatch();
    return(
        <div>
            {name.map((name,index)=>(
                <div key={index}>
                    <p style={{display:"inline",margin:"10px"}}>{name.item}</p>
                    <button onClick={()=>dispatch(sub(index))}>Delete Todo</button>
                </div>

            ))}
        </div>
    );
}
export default ListTodo;