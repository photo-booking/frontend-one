const BASE_URL = 'http://127.0.0.1:8080/https://photo-market.acceleratorpracticum.ru/api'; //my adress
const HEADERS = { 'Content-Type': 'application/json' };

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(res.json());
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
    });
}

//Войти в аккаунт через гугл
export function loginGoogle(param) {
  return fetch(`${BASE_URL}/auth_google`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ eccses_token: param })
  })
    .then(res => getResponseData(res))
    .then(res => {
      localStorage.setItem('token', res.token);
    });
}

//Войти в аккаунт через ВК
export function loginVk(param) {
  return fetch(`${BASE_URL}/auth_vk`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ code: param })
  })
    .then(res => getResponseData(res))
    .then(res => {
      localStorage.setItem('token', res.token);
    });
}

//Сбросить пароль: отправить письмо 
export function sendEmailToResetPassword(email) {
  return fetch(`${BASE_URL}/users/reset_password/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(email)
  })
    .then(res => getResponseData(res))
    ;
}

//Сбросить пароль: отправить новый пароль
export function resetPassword(values, param) {
  return fetch(`${BASE_URL}/users/reset_password_confirm/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ new_password: values.resetPassword,
                           uid: param.uid,
                           token: param.token
                        })   
  })
    .then(res => getResponseData(res))
    .then(res => {
      console.log(res);
    });
}

// Получить информацию о пользователе
export function getUserInfo(jwt) {
  return fetch (`${BASE_URL}/users/me/`, {
    method: 'GET',
    headers: {...HEADERS, 'Authorization': `token ${jwt}`}
  })
  .then(res=> getResponseData(res))
}

//Проверить токен на валидность
export function checkToken(jwt) {
  return fetch(`${BASE_URL}/???`, {
    method: 'GET',
    headers: { ...HEADERS, Authorization: `Bearer ${jwt}` }
  }).then(res => getResponseData(res));
}
