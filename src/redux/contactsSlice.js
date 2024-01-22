import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;
      state.contacts.items.push(newContact);
    },
    deleteContact(state, action) {
      const idDeleteContact = action.payload;
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== idDeleteContact
      );
    },
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
    setLoading(state, action) {
      state.contacts.isLoading = action.payload;
    },
    setError(state, action) {
      state.contacts.error = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, setLoading, setError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
