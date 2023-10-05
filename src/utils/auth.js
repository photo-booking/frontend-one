const BASE_URL = 'https://photo-market.acceleratorpracticum.ru/api'; //my adress
const HEADERS = { 'Content-Type': 'application/json' };

function getResponseData(res) {
  if (!res.ok) {
    return res.json().then(err => Promise.reject(err));
  }
  return res.json();
}

//Зарегистрировать пользователя
export function register(values, status) {
  return fetch(`${BASE_URL}/users/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      first_name: values.name,
      last_name: values.surname,
      email: values.email,
      password: values.password,
      is_client: status
    })
  }).then(res => getResponseData(res));
}

//Войти в аккаунт
export function login(values) {
  return fetch(`${BASE_URL}/auth/token/login`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email: values.email,
      password: values.password
    })
  })
    .then(res => getResponseData(res))
    .then(res => {
      localStorage.setItem('token', res.auth_token);
      // console.log(res);
    });
}

//Сбросить пароль: отправить письмо
export function sendEmailToResetPassword(email) {
  return fetch(`${BASE_URL}/users/reset_password/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(email)
  }).then(res => {
    if (res.ok) {
      console.log('письмо отправлено');
      return res;
    } else {
      console.log('ошибка сервера');
      return Promise.reject(res)
    }
  });
}

//Сбросить пароль: отправить новый пароль
export function resetPassword(values, param) {
  return fetch(`${BASE_URL}/users/reset_password_confirm/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ new_password: values.resetPassword, uid: param.uid, token: param.token })
  }).then(res => {
    if (res.ok) {
      console.log('пароль сброшен');
    } else {
      console.log('ошибка сервера');
    }
  });
}

// Получить информацию о пользователе
export function getUserInfo(jwt) {
  return fetch(`${BASE_URL}/users/me/`, {
    method: 'GET',
    headers: { ...HEADERS, Authorization: `token ${jwt}` }
  }).then(res => getResponseData(res));
}

//Проверить токен на валидность
export function checkToken(jwt) {
  return fetch(`${BASE_URL}/users/me/`, {
    method: 'GET',
    headers: { ...HEADERS, Authorization: `token ${jwt}` }
  }).then(res => getResponseData(res));
}

//выйти из профиля
export function logOut(jwt) {
  return fetch(`${BASE_URL}/auth/token/logout`, {
    method: 'POST',
    headers: { ...HEADERS, Authorization: `token ${jwt}` }
  }).then(res => {
    if (res.ok) {
      console.log('токен удален');
    } else {
      console.log('ошибка сервера');
    }
  });
}

//Войти в аккаунт через гугл
export function loginGoogle(param, status) {
  return fetch(`${BASE_URL}/social_google/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ eccses_token: param, status: status })
  })
    .then(res => getResponseData(res))
    .then(res => {
      localStorage.setItem('token', res.auth_token);
    });
}

//Войти в аккаунт через ВК
export function loginVk(param, status) {
  return fetch(`${BASE_URL}/social_vk/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ code: param, status: status })
  })
    .then(res => getResponseData(res))
    .then(res => {
      localStorage.setItem('token', res.auth_token);
    });
}

//Обновить личную информацию в ЛК
export function updatePersonalInfo(values, jwt) {
  return fetch(`${BASE_URL}/users/me/`, {
    method: 'PATCH',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      first_name: values.name,
      last_name: values.surname,
      city: values.city,
      about_me: values.aboutMe,
      equipment: values.equipment
    })
  })
    .then(res => getResponseData(res))
}

//Обновить аватар в ЛК
export function updatePersonalAvatar (value, type, jwt) {
  return fetch (`${BASE_URL}/users/me/`, {
    method: 'PATCH',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      profile_photo: `data:image/${type};base64,` + value,
    })
  })
    .then(res => getResponseData(res))
}

//Удалить аватар в ЛК
export function deletePersonalAvatar (jwt) {
  return fetch (`${BASE_URL}/users/me/`, {
    method: 'PATCH',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      profile_photo: null
    })
  })
    .then(res => getResponseData(res))
}

//Обновить контакты в ЛК
export function updatePersonalContacts (values, jwt) {
  return fetch (`${BASE_URL}/users/me/`, {
    method: 'PATCH',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      phone: values.phone,
      social_telegram: values.telegram,
      contact_email: values.email,
    })
  })
    .then(res => getResponseData(res))
}

//Обновить пароль в ЛК
export function updatePersonalPassword (values, jwt) {
  return fetch (`${BASE_URL}/users/set_password/`, {
    method: 'POST',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      current_password: values.current_password,
      new_password: values.new_password,
      re_new_password: values.repeat_new_password,
    })
  })
    .then(res => getResponseData(res))
}

//Удалить аккаунт
export function deleteAccount (jwt, id) {
  return fetch (`${BASE_URL}/users/me/`, {
    method: 'DELETE',
    headers: { ...HEADERS, Authorization: `token ${jwt}` },
    body: JSON.stringify({
      user_id: id
    })
  })
    .then(res => getResponseData(res))
}