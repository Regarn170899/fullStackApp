import './App.css';
import TaskBoard from "./components/TaskBoard/TaskBoard";
import {useEffect} from "react";
import {useAppDispatch} from "./hooks/storeHooks";
import {getTasks} from "./components/Task/taskSlice";

function App() {
const dispatch=useAppDispatch()

useEffect(()=>{
    dispatch(getTasks())
},[])
  return (
    <>
      <div>
          <TaskBoard />
      </div>
    </>
  )
}

export default App
