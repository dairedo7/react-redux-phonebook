import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
// console.log(createAction);
export const deleteContact = createAction('contacts/delete');
