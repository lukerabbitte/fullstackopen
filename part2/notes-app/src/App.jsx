import Note from './components/Note'
import { useState } from 'react'
import _ from 'lodash'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('Type...')
  const [showAll, setShowAll] = useState(true)
  const [stringSearch, setStringSearch] = useState(false)
  const [stringToSearch, setStringToSearch] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    const isDuplicate = notes.some(note => note.content === noteObject.content) // 'some' will return as soon as a match is found

    if (!isDuplicate) {
      setNotes(notes.concat(noteObject))
    }
    else {
      alert('Cannot add duplicate note!')
    }
    setNewNote('')
  }

  const handleInputChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleStringSearch = (event) => {
    setStringToSearch(event.target.value)
    setStringSearch(true)
  }

  const filterByImportance = () => {
    setShowAll(!showAll)
  }

  const filters = {
    showAll: note => showAll || note.important === true,
    stringSearch: note => !stringSearch || note.content.includes(stringToSearch), // or operator cuts off if first operand is true
    // Add more filters here as needed
  };

  const filteredNotes = notes.filter(note => Object.values(filters).every(filter => filter(note))); // every true value is executed

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <p>Substring to search</p>
        <input value={stringToSearch} onChange={handleStringSearch}/>
      </div>
      <div>
        <button onClick={filterByImportance}>
          Show {showAll ? 'Important' : 'All' }
        </button>
      </div>
      <ul>
        {filteredNotes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleInputChange}/>
        <button type="submit">Post Tweet</button>
      </form>
    </div>
  )
}

export default App