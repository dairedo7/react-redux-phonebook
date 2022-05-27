import { getFilterVal } from 'redux/filter/filter-selector';

export const getContacts = state => state.contacts.items;
// console.log(getContacts);
export const findContactsByQuery = state => {
  const contacts = getContacts(state);
  const nameToFilter = getFilterVal(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameToFilter.toLowerCase())
  );
};

export const defaultContacts = () => {
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};
