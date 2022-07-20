import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-7446666' },
    { name: 'Darth Vader', number: '044-6069009' },
    { name: 'Duke Nukem', number: '020-6969696' },
    { name: 'Gordon Freeman', number: '040-0502552' },
    { name: 'Leeroy Jenkins', number: '044-1234567' },
    { name: 'Reynald the Crusader', number: '040-1014042' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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

  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  function Search(props) {
    const filteredNames = persons.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
            {filteredNames.map((item) => (
                <p key={item.name}>{item.name} {item.number}</p>
            ))}
        </div>
    )
}

  return (
    <div>
      <h2>Phonebook</h2>
          Search: <input value={newSearch} onChange={handleSearch}></input>
      <form onSubmit={addName}>
        <h2>Add new</h2>
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
        <Search input={newSearch} />
    </div>
  )

}

export default App