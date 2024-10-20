import { useState } from 'react';
import './App.css';
import Gameplay from './Components/GamePlay/Gameplay'
import Home from './Components/Homepage/Home';

function App() {
  const [gamestart, setGamestart] = useState(false);
 
  const togglePage = ()=>{
    setGamestart(((previous) => !previous))
  }
  return (
<>
{gamestart? <Gameplay/>:<Home toggle={togglePage} />}
{/* <Home/> */}
</>
  );
}

export default App;
