export const REG_NAME = /^([a-zA-Z0-9а-яА-Я]+(\ [a-zA-Z0-9а-яА-Я]+)?)$/;
export const REG_SURNAME = REG_NAME;
export const REG_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const REG_PASSWORD = /^([a-zA-Z0-9+@!#$%&'*+/=?^`{|}~,-\.]*)$/;
export const ERR_MESSAGE_REQUIRED = 'Заполните это поле';
export const ERR_MESSAGE_INVALIDTEXT = 'Введите корректные данные';
export const ERR_MESSAGE_INVALIDEMAIL = 'Неверный формат email';
export const ERR_MESSAGE_INVALIDPASSWORD = 'Минимум 8 символов и 1 заглавная буква';
