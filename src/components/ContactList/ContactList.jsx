import { List, ListWrapper } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListWrapper>
      <List>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </li>
        ))}
      </List>
    </ListWrapper>
  );
};

export default ContactList;
