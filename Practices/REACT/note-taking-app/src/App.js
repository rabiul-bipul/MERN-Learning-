import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[noteTitle, setNoteTitle] = useState("")
  const [notes, setNotes] = useState([{id:1, title:"React"}])
  const [editMode, setEditMode] = useState(false)
  const [editableNote, setEditableNote] = useState(null)

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value)
  } 

  const submitHandler = (e) =>{
    e.preventDefault();
    if (noteTitle.trim() === '')
    {
      return alert("Pease Enter a Title")
    }

    const newNote = {
      id: Date.now() + "",
      title: noteTitle
    }

    setNotes([newNote, ...notes])
    setNoteTitle('')
  }

  return (
    
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' value={noteTitle} onChange={changeTitleHandler}>
        </input>
        <button type='submit'>Add Note</button>
      </form>
     <div className='note-list'>
      <h2>All Notes </h2>
      <ul>
        {notes.map(note => (
          <li>
            <span>{note.title}</span>
            <button>Edit</button>
            <button >Delete</button>
          </li>
        ))}
      </ul>

     </div>
    </div>
  );
}

export default App;
