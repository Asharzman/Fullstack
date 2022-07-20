import { useState } from 'react'

const Filter = (props) => {

  const handleSearch = (event) => {
    console.log(event.target.value)
    props.setNewSearch(event.target.value)
  }

  return (
    <div>
    Search: <input value={props.newSearch} onChange={handleSearch}></input>
    </div>
  )
}

const PersonForm = (props) => {
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    props.setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    props.setNewNumber(event.target.value)
  }
  
  
  const addName = (event) => {
    console.log('button clicked', event.target)
    event.preventDefault()
    const result = props.persons.some(elem => elem.name === props.newName);
    console.log(result)
    console.log(props.persons)
    if (result === false) {
      console.log('It’s false. No way. Not this time')
      const NameObject = { name: props.newName, number: props.newNumber }
      props.setPersons(props.persons.concat(NameObject))
      props.setNewName('')
      props.setNewNumber('')
    }
    else {
      console.log("You're right, a similar event took place")
      console.log('❗❗ Array already contains the item');
      alert('This name already exists in the list!')
      props.setNewName('')
      props.setNewNumber('')
    }
    }
  return (
    <form onSubmit={addName}>
        <h2>Add new</h2>
        <div>
          Name: <input value={props.newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value={props.newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
  )
}

const Search = (props) => {
    const filteredNames = props.persons.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
          <h2>Numbers</h2>
            {filteredNames.map((item) => (
                <p key={item.name}>{item.name} {item.number}</p>
            ))}
        </div>
    )
}

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

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newSearch={newSearch} setNewSearch={setNewSearch}/>
        <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
        <Search input={newSearch} persons={persons} />
    </div>
  )

}

export default App