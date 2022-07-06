import { useState } from 'react'

var points = new Uint8Array(7); 
const copy = [...points]
let randint = 0

const Button = (props) => (
  <button onClick={props.handleClick} >
    {props.text}
  </button>
)

const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  let mostvotes = copy.indexOf(Math.max(...copy));

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [selected, setSelected] = useState(0)

  const handleRandomClick = () => {
    randint = getRandomInt(7)
    setSelected(randint)
  }

  const handleVoteClick = () => {
    copy[randint] += 1
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {copy[randint]} votes.</p>
      <Button handleClick={handleRandomClick} text="Next Anecdote"/>
      <Button handleClick={handleVoteClick} text="Vote"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostvotes]}</p>
      <p> has {copy[mostvotes]} votes.</p>
    </div>
  )
}

export default App