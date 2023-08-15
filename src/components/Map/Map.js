import React from 'react';
import './Map.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Maps() {

  // переменная с основными параметрами карты
  const mapState = { center: [55.76, 37.64], zoom: 12 };

  // Допустим, пришли нам данные
  const plasePoints = [
    {
      number: '1',
      name: 'Hola!',
      geometry: [55.739128, 37.594459],
      balloonContent: 'Здесь какая-то информация',
      balloonContentHeader: 'Hola!',
      hint: 'подсказка 1'
    },
    {
      number: '2',
      name: 'Привет!',
      geometry: [55.739128, 37.638521],
      balloonContent: 'Здесь какая-то другая информация',
      balloonContentHeader: 'Привет!',
      hint: 'подсказка 2'
    },
    {
      number: '3',
      name: 'Ку!',
      geometry: [55.739128, 37.605459],
      balloonContent: 'Здесь еще какая-то информация',
      balloonContentHeader: 'Ку!',
      hint: 'подсказка 3'
    },
    {
      number: '4',
      name: 'Hay!',
      geometry: [55.760128, 37.605459],
      balloonContent: 'Здесь ну совсем другая информация',
      balloonContentHeader: 'Hay!',
      hint: 'подсказка 4'
    }
  ]
 
  return (
    <YMaps>
      <Map state={mapState} width={500} height={350}>
      {plasePoints.map((item) => (
          <Placemark 
            geometry={item.geometry} 
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} //важная штука. без нее не работает всплывающее окно baloon и подсказка
            properties={{
              iconCaption: item.name,
              iconContent: item.number,
              balloonContent: item.balloonContent,
              balloonContentHeader: item.balloonContentHeader,   
              hintContent: item.hint, 
            }}
            options={{
              preset :  'islands#dotIcon',
              iconColor: 'green',
              balloonPanelMaxMapArea: 0,
              hideIconOnBalloonOpen: false,
              balloonOffset: [0, -25],
            }}
          />
        )
        )}

{/* стандартные значения свойства preset
'islands#icon',
'islands#circleIcon',
при следующих двух значениях не будет отображаться item.number из-за особенностей стилей.
'islands#circleDotIcon'
'islands#dotIcon',
свойство iconColor отвечает за цвет. применимо только при стандартных значенийх свойства preset */}

      </Map>
    </YMaps>
  );
}

export default Maps;

