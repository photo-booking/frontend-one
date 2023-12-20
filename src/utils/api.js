import { url } from '../const/baseUrl';
export const BASE_URL = `${url}/api`; //my adress
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

//Добавить фотографию в портфолио
export function addPhotoToPortfolio(value, type, jwt, name) {
  return fetch(`${BASE_URL}/media_files/`, {
    method: 'POST',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      photo: `data:image/${type};base64,` + value,
      title: `${name}`,
      is_main_photo: 'false'
    })
  })
    .then(res => getResponseData(res))
    .then(res => console.log('усе отправилось'))
    .catch(err => console.log(err, 'нихрена не отправилось'));
}

//Получить отзывы на специалиста по его id
export function getExpertReviews(id) {
  return fetch(`${BASE_URL}/users/${id}/reviews/`, {
    method: 'GET',
    headers: HEADERS
  }).then(res => {
    return getResponseData(res);
  });
}

//Отправить отзыв на специалиста
export function postExpertReview(expertId, authorId, jwt, values) {
  return fetch(`${BASE_URL}/users/${expertId}/reviews/`, {
    method: 'POST',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      user: expertId,
      service_author: authorId,
      rating: values.rating,
      description: values.description
    })
  }).then(res => {
    if (res.ok) {
      console.log('отзыв отправлен');
    } else {
      console.log('ошибка сервера');
      return Promise.reject(res);
    }
  });
}

//Получаем массив отсортированных специлистов
export function filterUsers(values) {
  return fetch(`${BASE_URL}/users/?cpec=${values.filter}`, {
    method: 'GET',
    HEADERS
  })
    .then(res => getResponseData(res))
    .then(res => {
      console.log(res);
      return res;
    });
}
