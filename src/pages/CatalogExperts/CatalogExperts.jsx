import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import StickyBox from 'react-sticky-box';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../../components/Filter/Filter';
import { Card } from '../../components/Card/card';
import { fetchUsers } from '../../services/redusers/users';

import './CatalogExperts.css';
import { catalogActions } from '../../services/redusers/catalog';

export const CatalogExperts = props => {
  const { amountExpert, onStartCatalog } = props;
  const dispatch = useDispatch();
  const usersInfo = useSelector(state => state.users.data);
  const catalog = useSelector(state => state.catalog);

  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [isButtonShowMore, setIsButtonShowMore] = useState(catalog.isButtonShown);

  function num_word(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  }

  const returnCatalogTitle = num => {
    let title = num_word(num, [
      ' профессиональный фотограф и видеооператор',
      ' профессиональных фотографа и видеооператора',
      ' профессиональных фотографов и видеооператоров'
    ]);
    return num + title;
  };

  const catalogTitle = amountExpert
    ? returnCatalogTitle(amountExpert)
    : '100 профессиональных фотографов и видеооператоров';

  useEffect(() => {
    setData(usersInfo);
    onStartCatalog();
    console.log(catalog.isButtonShown, isButtonShowMore);
  }, [usersInfo, catalog.isButtonShown]);

  useEffect(() => {
    const isFirstRender = 4;
    // console.log(data.count, pageSize);
    if (isFirstRender !== pageSize) {
      if (data.count >= pageSize) {
        dispatch(fetchUsers({ spec: 'all', page_size: pageSize }));
        // catalogActions.savePageSize(pageSize);
      } else {
        dispatch(fetchUsers(data.count));
        setIsButtonShowMore(false);
        catalogActions.saveIsButtonShown(false);
        // catalogActions.savePageSize(pageSize);
      }
    }
  }, [pageSize]);

  const setNext = () => {
    let nextStep = pageSize <= data.count ? 4 : data.count;
    if (pageSize <= data.count) {
      setPageSize(prev => prev + nextStep);
    } else {
      setPageSize(data.count);
    }
  };

  return (
    <>
      {data.results && (
        <section className="catalog">
          <div className="catalog__info">
            <p className="catalog__city">Москва</p>
            <h1 className="catalog__title">{catalogTitle}</h1>
          </div>
          <div className={'catalog__container'}>
            <div className="catalog__filter">
              <StickyBox
                offsetTop={52}
                offsetBottom={52}
              >
                <Filter
                  photo="Фотографы"
                  video="Видеооператоры"
                />
              </StickyBox>
            </div>
            <div className="catalog__box">
              {data.results.map(user => (
                <Card
                  user={user}
                  key={uuidv4()}
                ></Card>
              ))}
              {isButtonShowMore && (
                <button
                  onClick={setNext}
                  className="button_more"
                >
                  Показать ещё
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
