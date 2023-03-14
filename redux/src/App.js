import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from './action/index';

function App() {

  const h = useSelector((state)=>state.changeNumber);
  const i = useSelector((state)=>state.hit);
  const dispatch = useDispatch();

  console.log(h)
  console.log(i);

  return (
    <div>

      <button onClick={()=>{dispatch(increment());
      dispatch({type:"HIT",payload:10})}} >+</button>&nbsp;
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
