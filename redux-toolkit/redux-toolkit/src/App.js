import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import {users} from "./counterSlice";
import { increment,decrement } from './counterSlice';


function App() {

  const data = useSelector((state)=>{return state.users.data})
  const dispatch = useDispatch();

  console.log(data);
  
  return (
   <>
     <button onClick={()=>dispatch(increment())}>+</button>&nbsp;
     <button onClick={()=>dispatch(decrement())}>-</button>
   </>
  );
}

export default App;
