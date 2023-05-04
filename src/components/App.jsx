import ContactForm from './contact_form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact_list/ContactList';
import { ContainerSettings } from './container_settings/ConteinerSettings.style';

export const App = () => {
  return (
    <>
      <ContainerSettings>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
      </ContainerSettings>
      <ContactList />
    </>
  );
};
