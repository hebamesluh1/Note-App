import React, { useState } from 'react'

import { AddNotes, SaveBtn } from './style'
import { NoteFooter } from '../Note/style'


const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;


    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0)
            setNoteText(e.target.value);
    }


    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    }


    return (
        <AddNotes>
            <textarea
                rows="8"
                cols="10"
                placeholder='Type to ad a note ... '
                onChange={handleChange}
                value={noteText}
            ></textarea>
            
            <NoteFooter>
                <small>{characterLimit - noteText.length} Remainding</small>
                <SaveBtn onClick={handleSave}>Save</SaveBtn>
            </NoteFooter>
        </AddNotes>
    )
}

export default AddNote