import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { openModalImage } from '../../slices/main';

import fullscreenIcon from '../../fullscreen.png';

import './CharCard.scss';

const CharCard = ({char}) => {

  const {name, desc, img, age, organisation, gender, race, home, addDesc, dead } = char;

  const dispatch = useDispatch();

  const onOpenModalImage = () => dispatch(openModalImage({alt:name, src:img}));

  const [isFlipped, toggleFlipped] = useState(false);
  const onToggleFlipped = (event) => {
    if (event.target.className !== 'char-img-icon' && window.getSelection().toString().length === 0) toggleFlipped(!isFlipped);
  }

  return (
    <div className={`char-card ${!isFlipped ? "" : "flipped"}`} onClick={(event) => onToggleFlipped(event)}>
      <div className='char-card-inner'>
        <div className='char-card-front'>
          <div className="char-name">
            <h2 className={`${!dead ? "" : "char-dead"}`}>{name}</h2>
          </div>

          <div className='char-img-container'>
            <img className={`char-img ${!dead ? "" : "char-dead"}`} src={img} alt={name}/>
            <img className='char-img-icon' src={fullscreenIcon} alt="Open full image" onClick={onOpenModalImage} />
          </div>
        
          <div className="char-desc">
            <h3>{desc}</h3>
          </div>
        </div>

        <div className='char-card-back'>
          <div>
            <h2>Пол:</h2>
            <p>{gender}</p>
          </div>

          <div>
            <h2>Раса:</h2>
            <p>{race}</p>
          </div>

          <div>
            <h2>Возраст:</h2>
            <p>{age}</p>
          </div>

          <div>
            <h2>Местонахождение:</h2>
            <p>{home}</p>
          </div>

          <div>
            <h2>Фракция:</h2>
            <p>{organisation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharCard;