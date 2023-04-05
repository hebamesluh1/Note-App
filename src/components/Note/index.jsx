import React, { useState } from 'react';

import { MdDeleteForever, MdCreate, MdDone } from "react-icons/md";

import { NoteFooter, NoteDiv } from './style';
import { useNotesDispatch } from './../../context/NotesContext';

const Note = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useNotesDispatch();
  const characterLimit = 200;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0)
      dispatch({
        type: 'changed',
        note: {
          ...note,
          text: e.target.value
        }
      })
  }
  if (isEditing) {
    return (
      <NoteDiv style={{ backgroundColor: note.color }}>
        <textarea
          rows="8"
          cols="10"
          placeholder='Type to ad a note ... '
          onChange={handleChange}
          value={note.text}
        ></textarea>

        <NoteFooter>
          <small>{characterLimit - note.text.length} Remainding</small>
          <MdDone
            onClick={() => setIsEditing(false)}
            className='delete-icon'
            size='1.3em' />
        </NoteFooter>
      </NoteDiv>)
  } else {
    return (
      <NoteDiv style={{ backgroundColor: note.color }}>
        <span>{note.text}</span>
        <NoteFooter>
          <small>{note.date}</small>
          <NoteFooter>
            <MdDeleteForever
              onClick={() => dispatch({
                type: 'deleted',
                id: note.id
              })}
              className='delete-icon'
              size='1.3em'
            />
            <MdCreate
              onClick={() => setIsEditing(true)}
              className='delete-icon'
              size='1.3em'
            />
          </NoteFooter>
        </NoteFooter>
      </NoteDiv>)
  }
}
export default Note