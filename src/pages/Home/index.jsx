import { useEffect, useState } from "react";

import { Container } from "../../global/components";
import { GlobalStyle } from "../../global/style";



import { nanoid } from "nanoid";
import { randomColor } from './../../utils/randomColor';


import NotesList from "../../components/NotesList";
import Search from "../../components/Search";
import Header from './../../components/Header/index';

//to get the data from LS 
const getLocalItems = () => {
  let savedNotes =
    localStorage.getItem('note-app');
  if (savedNotes) {
    return JSON.parse(localStorage.getItem('note-app'));
  } else {
    return [];
  }
}

const Home = () => {

  const [notes, setNotes] = useState(getLocalItems());
  const [search, setSearchText] = useState('');


  //add notes 
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: randomColor()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };


  //delete notes 
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };


  //save notes in local storage 
  useEffect(() => {
    localStorage.setItem(
      'note-app',
      JSON.stringify(notes)
    );
  }, [notes]);



  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(search)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </Container>
  );
}

export default Home;
