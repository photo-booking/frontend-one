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
