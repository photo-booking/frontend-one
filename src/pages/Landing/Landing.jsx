import './Landing.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FirstScreen } from '../../components/FirstScreen/FirstScreen';
import { ProductFeatures } from '../../components/ProductFeatures/ProductFeatures';
import { ExpertsPreview } from '../../components/ExpertsPreview/ExpertsPreview';
import { BannerForExperts } from '../../components/BannerForExperts/BannerForExperts';
import { FAQ } from '../../components/FAQ/FAQ';

export const Landing = (props) => {
  const usersInfo = useSelector(state => state.users.data);
  const [expertsPreview, setExpertsPreview] = useState([]);

  useEffect(() =>{
    setExpertsPreview(usersInfo)
  }, [usersInfo]);

  function setNumWord(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  }

  const returnCatalogTitle = num => {
    let title = setNumWord(num, [
      ' фотограф и видеооператор',
      ' фотографа и видеооператора',
      ' фотографов и видеооператоров'
    ]);
    return num + title;
  };

  const catalogTitle = props.amountExpert
    ? returnCatalogTitle(props.amountExpert)
    : '1370 фотографов и видеооператоров'
  ;

  return (
    <>
    {expertsPreview.results && (
        <div className={'landing-container'}>
          <FirstScreen />
          <ProductFeatures />
          <ExpertsPreview
            catalogTitle={catalogTitle}
            expertsPreview={expertsPreview}
            />
          <BannerForExperts />
          <FAQ />
        </div>
      )}
    </>
  );
};
