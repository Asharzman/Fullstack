import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  const { text, value } = props
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  var total = (good+neutral+bad)
  var avg = ((good-bad)/total)
  var positive = (good/total*100)

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
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Neutral" value ={neutral} />
      <StatisticLine text="Bad" value ={bad} />
      <StatisticLine text="All" value ={total} />
      <StatisticLine text="Average" value ={avg} />
      <StatisticLine text="Positive" value ={positive} />
    </div>
  )
}

const App = (props) => {
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

  return (
    <div>
    <h1>Give Feedback:</h1>
    <Button handleClick={handleGoodClick} text='Good'/>
    <Button handleClick={handleNeutralClick} text='Neutral'/>     
    <Button handleClick={handleBadClick} text='Bad'/>   
    <Statistics good={good} neutral={neutral} bad={bad}/>
  </div>
  )
}

export default App
