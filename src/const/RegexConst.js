export const REG_NAME = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;
export const REG_SURNAME = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;
export const REG_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const REG_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const ERR_MESSAGE_REQUIRED = 'Заполните это поле';
export const ERR_MESSAGE_INVALIDTEXT = 'Введите корректные данные';
export const ERR_MESSAGE_INVALIDEMAIL = 'Введите корректный адрес электронной почты';
export const ERR_MESSAGE_INVALIDPASSWORD = 'Введите корректный пароль';
