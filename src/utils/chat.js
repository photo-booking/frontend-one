import { url } from '../const/baseUrl';
const BASE_URL = `${url}/api`; //my adress
const HEADERS = { 'Content-Type': 'application/json' };

function getResponseData(res) {
  if (!res.ok) {
    return res.json().then(err => Promise.reject(err));
  }
  return res.json();
}

// Получить id чата с выбранным пользователем и историю чата
export function getIdChatAndChatHistory(jwt, userId) {
  return fetch(`${BASE_URL}/check_chat/`, {
    method: 'POST',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({ id: userId })
  }).then(res => {
    return getResponseData(res);
  });
}
