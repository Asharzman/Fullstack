import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const History = (props) => {
    if (props.good && props.neutral && props.bad === 0 ) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }

  var total = (good+neutral+bad)
  var avg = ((good-bad)/total)
  var positive = (good/total*100)
  
    return (
      <div>
        <h1>Button press history:</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {total} </p>
        <p>Average: {avg}</p>
        <p>Positive: {positive}</p>
      </div>
    )
  }
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
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
    <History props={good} />
  </div>
  )
}

export default App
