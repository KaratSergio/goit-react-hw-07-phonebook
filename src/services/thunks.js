import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts as fetchContactsApi,
  addContact as addContactApi,
  deleteContact as deleteContactApi,
} from './api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return fetchContactsApi();
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return addContactApi(contact);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return deleteContactApi(id);
  }
);
