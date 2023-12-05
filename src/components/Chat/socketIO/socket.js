import { socketUrl } from '../../../const/socketUrl';

export const socket = new WebSocket(`${socketUrl}:{id}/`);

socket.onopen = function () {
  console.log('Соединение установлено');
};

socket.onmessage = function (event) {
  console.log(`Получено сообщение: ${event.data}`);
};

socket.onclose = function (event) {
  console.log('Соединение закрыто');
};

socket.onerror = function (error) {
  console.log(`Ошибка: ${error.message}`);
};
