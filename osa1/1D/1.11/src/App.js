import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  const { text, value } = props
  return (
    <tbody>
    <tr>
      <td>{text}: {value}</td>
    </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, allStats, setAll, Table} = props
  var total = (good+neutral+bad)
  var avg = (Math.round((((good-bad)/total) + Number.EPSILON) * 10) / 10)
  var positive = (good/total*100)
  var pos = (Math.round((positive + Number.EPSILON) * 10) / 10) + "%"

  if (total === 0) {
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
      <table>
        <StatisticLine text="Good" value ={good} />
        <StatisticLine text="Neutral" value ={neutral} />
        <StatisticLine text="Bad" value ={bad} />
        <StatisticLine text="All" value ={total} />
        <StatisticLine text="Average" value ={avg} />
        <StatisticLine text="Positive" value ={pos} />
      </table>
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
