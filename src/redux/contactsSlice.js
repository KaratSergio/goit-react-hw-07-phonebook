import { createSlice } from '@reduxjs/toolkit';
import * as thunks from '../services/thunks';

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
  extraReducers: builder => {
    builder
      .addCase(thunks.fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(thunks.fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(thunks.fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.error.message;
        state.contacts.isLoading = false;
      })
      .addCase(thunks.addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(thunks.deleteContact.fulfilled, (state, action) => {
        const idDeleteContact = action.payload;
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== idDeleteContact
        );
      });
  },
});

export const { addContact, deleteContact, setFilter, setLoading, setError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export default contactsReducer;