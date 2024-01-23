import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <section className={css.container}>
      <h1 className={css['main-title']}>Phonebook</h1>
      <ContactForm />
      <h2 className={css['contacts-title']}>Contacts</h2>
      <div className={css['filter-container']}>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
