import { useState } from 'react'

const Statistics = (props) => {
  var total = (props.good+props.neutral+props.bad)
  var avg = ((props.good-props.bad)/total)
  var positive = (props.good/total*100)

  if (total === 0 ) {
    return (
      <div>
        <h1>Statistics:</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics:</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {total} </p>
      <p>Average: {avg}</p>
      <p>Positive: {positive}</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
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
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
    <h1>Give feedback</h1>
    <Button handleClick={handleGoodClick} text='Good'/>
    <Button handleClick={handleNeutralClick} text='Neutral'/>     
    <Button handleClick={handleBadClick} text='Bad'/>           
    <Statistics good={good} neutral={neutral} bad={bad}/>
  </div>
  )
}

export default App
