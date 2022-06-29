import React, {Component} from "react";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
          <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
          <p>{props.part}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
          <p>Number of exercises {props.total}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part={part1 + ' ' + exercises1} />
      <Content part={part2 + ' ' + exercises2} />
      <Content part={part3 + ' ' + exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
    )
}

export default App
