import './App.css';
import { useState } from 'react'

function App() {

  const [boxColor, setBoxColor] = useState('')

  const changeColor = () => {
    let color = document.getElementById('inserted-color')
    let title = document.getElementById('title-txt')

    setBoxColor(color.value)

     if(color.value == 'black') title.style.color = 'white' 
     else (title.style.color = 'black')
     
  }



  return (
   <form style={{background: boxColor}} onSubmit={(e) => e.preventDefault()}>
     <h1 id="title-txt">Change the color:</h1>
      <input id="inserted-color" onChange={changeColor} type="text" placeholder="Type a color"></input>
   </form>
  );
}

export default App;
