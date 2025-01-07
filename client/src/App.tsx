import './App.css';
import TaskBoard from "./components/TaskBoard/TaskBoard";
import {useEffect} from "react";
import {useAppDispatch} from "./hooks/storeHooks";
import {getStatuses, getTasks} from "./components/Task/taskSlice";

function App() {
const dispatch=useAppDispatch()

useEffect(()=>{
    dispatch(getTasks())
    dispatch(getStatuses())
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
