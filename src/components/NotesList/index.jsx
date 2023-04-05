import React from 'react'

import Note from '../Note';
import AddNote from '../AddNote';

import { NotesListStyle } from './style';

const NotesList = ({ notes }) => {

  return (
    <NotesListStyle>
      {notes.map((note) =>
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          color={note.color} />
      )}
      <AddNote />
    </NotesListStyle>
  )
}

export default NotesList