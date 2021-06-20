import React from 'react'
import ReactDOM from 'react-dom'

const Header=(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}
const Content=(part1 ,part2 ,part3 ,exercises1 ,exercises2 ,exercises3)=>{
  return(
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    
    </div>
  )
}
const Total=(props)=>{
  return(
    <p> Number of exercises {props.total_exercises}</p>
  )
}

const Part=(props)=>{
  console.log(props)
  return(
    <p>{props.part} {props.exercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts=[
    {
    name:'Fundamentals of React',
    exercises:10
    } ,
  
   {
    name:'Using props to pass data',
    exercises:7
  },

  
  {
    name:'State of a component',
    exercises:14
  }
  ]

  return (
    <div>
      <Header course={course}/>
      {Content (parts[0].name, parts[1].name , parts[2].name, parts[0].exercises, parts[1].exercises, parts[2].exercises)}
      <Total total_exercises= {parts[0].exercises + parts[1].exercises  + parts[2].exercises }/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
