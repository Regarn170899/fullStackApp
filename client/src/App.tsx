
import './App.css'
import  axios from 'axios';

function App() {
    const getAllUsers=async ()=>{
    try {
      const response =await  axios.get('http://localhost:5000/users')
      console.log(response);
    }catch (e) {
      console.log(e);
    }
    }

  return (
    <>
      <div>
          <button onClick={()=>getAllUsers()}>test</button>
      </div>
    </>
  )
}

export default App
