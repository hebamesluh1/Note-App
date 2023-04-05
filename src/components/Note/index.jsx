import React from 'react';

import { MdDeleteForever } from "react-icons/md";
import { NoteFooter, NoteDiv } from './style';
import { useNotesDispatch } from './../../context/NotesContext';

const Note = ({ id, text, date, color }) => {
  const dispatch = useNotesDispatch();
  return (
    <NoteDiv style={{ backgroundColor: color }}>
      <span>{text}</span>
      <NoteFooter>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => dispatch({
            type: 'deleted',
            id: id
          })}
          className='delete-icon'
          size='1.3em'
        />
      </NoteFooter>
    </NoteDiv>
  )
}
export default Note