const BASE_URL = 'https://photo-market.acceleratorpracticum.ru/api'; //my adress
const HEADERS = { 'Content-Type': 'application/json' };

function getResponseData(res) {
  if (!res.ok) {
    return res.json().then(err => Promise.reject(err));
  }
  return res.json();
}

//Получить количество профессиональных фотографов и видеооператоров
export function getAmountExpert() {
    return fetch(`${BASE_URL}/catalog/`, {
        method: 'GET',
        headers: HEADERS
    }).then(res=> {
        return getResponseData(res)
    }).then(res => console.log(res))
}


//Получаем users всех пользователей

export function getUsers() {
  return fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: HEADERS
  })
  .then(getResponseData)
  .then((users) => {
      console.log('Пользователи', users);
      return users
  })
}

export function getUsersID(id) {
  return fetch(`${BASE_URL}/users${id}`, {
    method: 'GET',
    headers: HEADERS
  })
  .then(getResponseData)
  .then((user) => {
      return user
  })
}