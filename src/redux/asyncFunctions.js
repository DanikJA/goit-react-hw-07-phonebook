import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67c6e6a3c19eb8753e77d4b0.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
