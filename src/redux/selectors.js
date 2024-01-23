// selectors.js

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name }) =>
        name && typeof name === 'string' && name.toLowerCase().includes(filter)
    );
  }
);

export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
