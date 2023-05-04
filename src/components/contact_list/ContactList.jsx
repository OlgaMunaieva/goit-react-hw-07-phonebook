import { ContainerItem, ContainerList } from './ContactList.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ContainerList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContainerItem key={id}>
          {name}: {number}
          <AiOutlineCloseCircle onClick={() => onDelete(id)} />
        </ContainerItem>
      ))}
    </ContainerList>
  );
};

export default ContactList;
