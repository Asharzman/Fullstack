import React, {Component} from "react";

const App = () => {
  const course = 'Half Stack application development '
  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data '
  const exercises2 = 7
  const part3 = 'State of a component '
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
          <h1>{props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.part}</p>
      </ >
    )
  }

  const Content = (props) => {
    return (
      <div>
          <Part part={part1 + exercises1} />
          <Part part={part2 + exercises2} />
          <Part part={part3 + exercises3} />
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

    </div>
    )
}

export default App
