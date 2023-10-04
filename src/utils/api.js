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
  return fetch(`${BASE_URL}/users/count/`, {
    method: 'GET',
    headers: HEADERS
  }).then(res => {
    return getResponseData(res);
  });
}

//Получаем users всех пользователей
export function getUsers(spec, limit, pageSize) {
  // console.log(spec, limit, pageSize);
  return fetch(
    `${BASE_URL}/users/?spec=${spec}&limit=${limit}${pageSize ? `&page_size=${pageSize}` : ''}`,
    {
      method: 'GET',
      headers: HEADERS
    }
  )
    .then(getResponseData)
    .then(users => {
      return users;
    });
}

//Получаем users всех пользователей
export function getCatalog() {
  return fetch(`${BASE_URL}/catalog/`, {
    method: 'GET',
    headers: HEADERS
  })
    .then(res => getResponseData(res))
    .then(catalog => catalog);
}

//Получить массив фотографов и видеооператоров
// export function getArrayExpert(values, page) {
//   return fetch(`${BASE_URL}/users/`, {
//     method: 'POST',
//     headers: HEADERS,
//     body: JSON.stringify({
//       price: values.price,
//       experts: values.experts,
//       type: values.type,
//       price_min: values.price_min,
//       price_max: values.price_max,
//       page: page
//     })
//   })
//     .then(res => {
//       return getResponseData(res);
//     })
//     .then(res => console.log(res));
// }

//Получить информацию Профиля специалиста
export function getExpertProfile(id) {
  return fetch(`${BASE_URL}/users/${id}/`, {
    method: 'GET',
    headers: HEADERS
  }).then(res => {
    return getResponseData(res);
  });
}

//Получить прайслист специалиста
export function getPriceExpert(id) {
  return fetch(`${BASE_URL}/services/${id}/`, {
    method: 'GET',
    headers: HEADERS
  })
    .then(res => {
      return getResponseData(res);
    })
    .then(res => console.log(res));
}
