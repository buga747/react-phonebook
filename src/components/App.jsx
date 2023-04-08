import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {error && <p>{error}</p>}

      {isLoading && !error && <Loader />}

      <ContactList />
    </Container>
  );
}

export default App;
