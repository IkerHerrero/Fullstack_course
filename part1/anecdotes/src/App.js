import React, { useState } from 'react'
const Display=(props)=><h1>{props.text}</h1>
const Button =({handleClick,text})=>{
  // console.log("los datos recividos son:", {handleClick})
   return(<button onClick={handleClick}>{text}</button>)
 }

const App=()=> {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [allVotes, setVotes] = useState([0,0,0,0,0,0])
  //const allVotes= new Array(6).fill(0);
  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    let newSelected=0
    newSelected=getRandomArbitrary(0,anecdotes.length)
    console.log("result",newSelected)
   setSelected(newSelected)
  }
  /*
 * Returns a random number between min (inclusive) and max (exclusive)
 */
  const getRandomArbitrary=(min, max)=> (Math.floor(Math.random() * (max - min)) + min)
  const handleClickVote = () => {
    const newVotes= [...allVotes];
    newVotes[selected]=newVotes[selected]+1;
    setVotes(newVotes);
    //{anecdotes[result=getRandomArbitrary(0,anecdotes.length)]}
  
    }
  /*
 * Returns index number of maximun votes
 */
  const findMaxVotes=()=>(allVotes.findIndex((resultado)=>resultado===Math.max(...allVotes)))
  
  return (
    <div >
      <Display text="Anecdote of the day"/>
      {anecdotes[selected]}
      <br></br>
      <br></br>
      has {allVotes[selected].toString()} votes
      <br></br>
      <Button handleClick={handleClickVote} text='vote'  />
      <Button handleClick={handleClick} text='next anecdote'  />
      <Display text="Anecdote with most votes"/>
      {anecdotes[findMaxVotes()]}
      {console.log(findMaxVotes())}
    </div>
  );
}

export default App;
