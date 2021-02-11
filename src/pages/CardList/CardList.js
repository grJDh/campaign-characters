import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './containers/Card/Card';
import ModalImage from "./parts/ModalImage/ModalImage";

import { filtersSelector } from '../../slices/filters';
import { modalSelector, closeModalImage } from '../../slices/modal';

import "./CardList.scss"

const CardList = ({chars}) => {

  const dispatch = useDispatch();

  const { boolFilters, searchFilterValue } = useSelector(filtersSelector);
  const { modalImageAlt, modalImageSrc, modalImageOpened } = useSelector(modalSelector);

  const boolTagsFilter = boolTags => {
    const boolTagsKeys = Object.keys(boolTags);
    if (boolTagsKeys.length) {
      for (let i of boolTagsKeys) {
        if (!(!boolFilters[i] || boolTags[i])) return false;
      };

      return true;
    }
  }

  const filteredChars = chars
  .filter(char => !char.hidden)

  .filter(char => boolTagsFilter(char.boolTags))

  .filter(char => char.title.toLowerCase().includes(searchFilterValue.toLowerCase()))
  .sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    // if (a.name === b.name) return 0;
    return 0;
  });

  const onClose = (event) => {
    // if (event.target.tagName !== "IMG") dispatch(closeModalImage());
    dispatch(closeModalImage());
  }

  return (
    <div className='chars-list'>

      <ModalImage alt={modalImageAlt} src={modalImageSrc} opened={modalImageOpened} close={onClose}/>

      {filteredChars.map((char) => (
        <Card key={char.name} char={char}/>
        ))}
    </div>
  );
}

export default CardList;