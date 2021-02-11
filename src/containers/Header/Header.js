import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '../../components/CheckBox/CheckBox';
import SearchBox from '../../components/SearchBox/SearchBox';

import './Header.scss';

import { filtersSelector, toggleMajor, toggleDead, changeSearchField } from '../../slices/filters';

const Header = () => {

  const dispatch = useDispatch();
  const { boolFilters, searchFilterValue } = useSelector(filtersSelector);

  const onToggleMajor = () => dispatch(toggleMajor(!boolFilters.major));
  const onToggleDead = () => dispatch(toggleDead(!boolFilters.alive));
  const onChangeSearchField = event => dispatch(changeSearchField(event.target.value));


  return (
    <header className='header'>
      <Checkbox label='Только важные' onFunc={onToggleMajor} />
      <Checkbox label='Только живые' onFunc={onToggleDead} />

      <SearchBox label='Поиск' onFunc={onChangeSearchField} />
    </header>
  );
}

export default Header;