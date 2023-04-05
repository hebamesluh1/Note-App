import { useState } from "react";
import { useNotes } from '../../context/NotesContext';

import { Container } from "../../global/components";
import { GlobalStyle } from "../../global/style";



import NotesList from "../../components/NotesList";
import Search from "../../components/Search";
import Header from './../../components/Header/index';

const Home = () => {
  const notes = useNotes();
  const [search, setSearchText] = useState('');

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.includes(search)
        )}
      />
    </Container>
  );
}

export default Home;
