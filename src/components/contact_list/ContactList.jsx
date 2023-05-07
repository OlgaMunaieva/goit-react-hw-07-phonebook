import { useEffect } from 'react';
import { ContainerItem, ContainerList } from './ContactList.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ContainerList>
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <ContainerItem key={id}>
            {name}: {phone}
            <AiOutlineCloseCircle onClick={() => onDelete(id)} />
          </ContainerItem>
        ))}
    </ContainerList>
  );
};

export default ContactList;
