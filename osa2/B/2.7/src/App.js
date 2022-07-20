import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    console.log('button clicked', event.target)
    event.preventDefault()
    const result = persons.some(elem => elem.name === newName);
    console.log(result)
    console.log(persons)
    if (result === false) {
      console.log('It’s false. No way. Not this time')
      const NameObject = { name: newName }
      setPersons(persons.concat(NameObject))
      setNewName('')
    }
    else {
      console.log("You're right, a similar event took place")
      console.log('❗❗ Array already contains the item');
      alert('This name already exists in the list!')
      setNewName('')
    }
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(persons => {
          <p key={persons.name} />
          return (
            <p>{persons.name}</p>
          )
        }
        )}
    </div>
  )

}

export default App