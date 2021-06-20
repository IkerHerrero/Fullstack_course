
import React, { useState } from 'react'

const Display=({text})=><h1>{text}</h1>

const Button =({handleClick,text})=>{
 // console.log("los datos recividos son:", {handleClick})
  return(<button onClick={handleClick}>{text}</button>)
}


const Results = ({text, result}) => 
   (
    <div>
      {text} {result}
    </div>
  )
const Statistics = ({text,value}) => {

    return(
     <table>
      <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      </tbody>
      </table>
     )
    }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    
    setBad(bad + 1)
  }

  const total=()=>good+bad+neutral
  const average=()=>{
    let average=0
    let i=0
    for (i=good; i>0;i--){
      average=average+1
    } 
    for (i=bad; i>0;i--){
      average=average-1
    } 
    return(average)
  }
  const positive=()=>good/total()  
  
  
  
if (total()>0){
  return (
    <div>
      <Display text="give feedback"/>
      <br></br>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <br></br>
      <Display text="Statistics"/>
      
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="all" value={total()} />
      <Statistics text="average" value={average()} />
      <Statistics text="positive" value={positive()} />
      
    </div>
  )
  }else
  {
    return(
      <div>
      <Display text="give feedback"/>
      <br></br>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <br></br>
      <Display text="Statistics"/>
      No feedback given
      </div>
    )
  }

}



export default App;
