import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactListComponent } from './ContactList/ContactList';

export const App = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <ContactForm />
      <Filter />
      <ContactListComponent />
    </div>
  );
};
