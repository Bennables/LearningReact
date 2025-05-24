import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//ALL items must have uppercase names
const Comp = ({title}) =>{

  const [Liked, setLiked] = useState(false);




  return(
    <div>
    <h2>{title}</h2>
    <button onClick={()=>setLiked(!Liked)}>{Liked ? 'Liked' : "Like"}</button>
    </div>
  )
}

const App = () =>{
  return (
    <div>
    <h2> HELLO </h2>
    <Comp title = "hellp" />
    <Comp title = "hellp" />
    <Comp title = "hellp" />
    <Comp title = "hellp" />
    </div>
  )
}

export default App
