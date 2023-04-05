import React,{memo} from 'react';

import { MdDeleteForever } from "react-icons/md";
import { NoteFooter, NoteDiv } from './style';

const Note = memo(({ id, text, date, handleDeleteNote,color }) => {
  console.log('Render Note')

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
)
export default Note