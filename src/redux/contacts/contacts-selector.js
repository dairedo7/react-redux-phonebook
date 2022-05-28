import { getFilterVal } from 'redux/filter/filter-selector';

export const getContacts = state => state.contacts.items;

export const findContactsByQuery = state => {
  const contacts = getContacts(state);
  const nameToFilter = getFilterVal(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameToFilter.toLowerCase())
  );
};
