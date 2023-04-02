import React from 'react';

import { MdDeleteForever } from "react-icons/md";
import { NoteFooter, NoteDiv } from './style';

const Note = ({ id, text, date, handleDeleteNote,color }) => {
  return (
    <NoteDiv style={{backgroundColor:color}}>
      <span>{text}</span>
      <NoteFooter>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className='delete-icon'
          size='1.3em'
        />
      </NoteFooter>
    </NoteDiv>
  )
}

export default Note