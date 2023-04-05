import React, { memo } from 'react'

import Note from '../Note';
import AddNote from '../AddNote';

import { NotesListStyle } from './style';

const NotesList = memo(({notes,handleAddNote,handleDeleteNote}) => {
  console.log('Render NoteList')

  return (
    <NotesListStyle>
      {notes.map((note)=>
          <Note  
          key={note.id} 
          id={note.id} 
          text={note.text} 
          date={note.date} 
          handleDeleteNote={handleDeleteNote} 
          color={note.color}/>
      )}
      <AddNote handleAddNote={handleAddNote} />
    </NotesListStyle>
  )
})

export default NotesList