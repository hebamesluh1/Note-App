import NotesList from "./components/NotesList";
import { Container } from "./global/components";
import { GlobalStyle } from './global/style';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <NotesList/>
    </Container>
  );
}

export default App;
