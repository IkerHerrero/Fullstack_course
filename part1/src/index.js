import React from 'react'
import ReactDOM from 'react-dom'

const Header=(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}
const Content=(part)=>{
  return(
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    
    </div>
  )
}
const Total=(props)=>{
  let i=0
  for ( i=0;i<3;i++){
  i=i+props.parts[i].exercises;
  }
  return(
    
    <p> Number of exercises {i}</p>
  )
}

const Part=(props)=>{
  console.log(props)
  return(
    <p>{props.part} {props.exercises}</p>
  )
}


const App = () => {
  const course ={
    name:'Half Stack application development',
  parts:[
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
}
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts= {course.parts}/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
