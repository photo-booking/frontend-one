import './PersonalInfo.css';

export const PersonalInfo = () => {
  return (
    <article className="personalInfo">
      <h1>Личная информация</h1>
      <p>Эта информация видна всем в вашем профиле</p>
      <div>
        <p>Аватар</p>
        <div>
          <span>Круг</span>
          <form
            method="post"
            enctype="multipart/form-data"
            className="personalInfo__form"
          >
            <label class="input-file">
              <input
                type="file"
                name="file"
              />
              <span class="input-file-btn">Загрузить новый аватар</span>
              <span class="input-file-text">Размер 800x800px В формате JPG или PNG</span>
            </label>
            <label>
              Имя
              <input></input>
            </label>
            <label>
              Фамилия
              <input></input>
            </label>
            <label>
              Город
              <input></input>
            </label>
            <label>
              Обо мне
              <textarea></textarea>
            </label>
            <label>
              Оборудование
              <textarea></textarea>
            </label>
            <button>Сохранить</button>
          </form>
        </div>
      </div>
    </article>
  );
};
