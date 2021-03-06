import React from 'react'

const Note = ({ note, toggleImportance, deleteNote }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={deleteNote}>x</button>
    </li>
  )
}

export default Note