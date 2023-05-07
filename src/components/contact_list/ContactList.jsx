import { useEffect } from 'react';
import { ContainerItem, ContainerList } from './ContactList.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  // const filter = useSelector(selectFilter);
  const contacts = useSelector(selectVisibleContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // вызовите функцию для получения списка при монтировании компонента
  }, [dispatch]);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ContainerList>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContainerItem key={id}>
            {name}: {number}
            <AiOutlineCloseCircle onClick={() => onDelete(id)} />
          </ContainerItem>
        ))}
    </ContainerList>
  );
};

export default ContactList;
