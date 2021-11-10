import { useSelector, useDispatch } from "react-redux"
import { incrment, decrment } from "./action/index"
import "./style.css"
function App() {
  const myState = useSelector((state) => state.changNum)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Increment & Decrement counter</h1>
      <h3>Using React and Redux</h3>
      <div>
        <span onClick={() => { dispatch(incrment()) }}>+</span>
        <input value={myState} />
        <span onClick={() => { dispatch(decrment()) }}>-</span>
      </div>
    </div>
  );
}

export default App;
