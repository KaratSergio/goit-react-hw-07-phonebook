import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;
      state.contacts.push(newContact);
    },
    deleteContact(state, action) {
      const idDeleteContact = action.payload;
      state.contacts = state.contacts.filter(
        ({ id }) => id !== idDeleteContact
      );
    },
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
