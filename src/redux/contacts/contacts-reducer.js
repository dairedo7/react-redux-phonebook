import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact } from './contacts-actions';

const items = createReducer([], {
  // state: defaultContacts(),
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default items;
