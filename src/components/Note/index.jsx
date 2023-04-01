import React from 'react';
import {MdDeleteForever}  from "react-icons/md";
import {NoteFooter , NoteDiv} from './style';
const Note = () => {
  return (
    <NoteDiv>
        <span>Hello!! This is first note </span>
        <NoteFooter>
            <small>12/12/2002</small>
            <MdDeleteForever size='1.3em' className="delete-icon"/>
        </NoteFooter>
    </NoteDiv>
  )
}

export default Note