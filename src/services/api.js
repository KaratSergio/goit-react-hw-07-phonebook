import axios from 'axios';

const API_KEY = '65ae13ba1dfbae409a73e083';
const BASE_URL = `https://${API_KEY}.mockapi.io`;
const END_POINT_CONTACTS = 'contacts';

axios.defaults.baseURL = BASE_URL;

const makeRequest = async (method, endpoint, payload = null) => {
  const config = {
    method,
    url: `/${endpoint}`,
    data: payload,
  };

  const { data } = await axios(config);
  return data;
};

export const fetchContacts = async () => {
  return makeRequest('get', END_POINT_CONTACTS);
};

export const addContact = async contact => {
  return makeRequest('post', END_POINT_CONTACTS, contact);
};

export const deleteContact = async id => {
  return makeRequest('delete', `${END_POINT_CONTACTS}/${id}`);
};
