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
          note={note} />
      )}
      <AddNote />
    </NotesListStyle>
  )
}

export default NotesList