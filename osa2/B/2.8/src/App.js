import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-7446666' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    console.log('button clicked', event.target)
    event.preventDefault()
    const result = persons.some(elem => elem.name === newName);
    console.log(result)
    console.log(persons)
    if (result === false) {
      console.log('It’s false. No way. Not this time')
      const NameObject = { name: newName, number: newNumber }
      setPersons(persons.concat(NameObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      console.log("You're right, a similar event took place")
      console.log('❗❗ Array already contains the item');
      alert('This name already exists in the list!')
      setNewName('')
      setNewNumber('')
    }
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(persons => {
          <p key={persons.name} />
          return (
            <p>{persons.name} {persons.number}</p>
          )
        }
        )}
    </div>
  )

}

export default App