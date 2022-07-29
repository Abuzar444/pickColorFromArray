import React, {useState} from 'react'
import './App.css'
const App = () => {
  const [colors, setColors] = useState(['green', 'blue', 'red', 'yellow', 'cyan'])
  const [index, setIndex] = useState(0);
  
  const checkNum = (number) => {
    if(number > colors.length - 1){
      return 0;
    }
    if(number < 0){
      return colors.length - 1;
    }
    return number;
  }

  const incrementNum = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    })
  }

  return (
    <div style={{background: colors[index -1], padding: '20px', borderRadius: '20px'}}>
      <h1 style={{color: colors[index]}}>{colors[index]}</h1>
      <button onClick={incrementNum}>ChangeNumber</button>
    </div>
  )
}

export default App