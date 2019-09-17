import React from 'react';
import './searchInput.scss';
export const SearchInput = ({ value, onChange, onEnterPressed })=> {
  const onInputChange = (e) => onChange(e.target.value);
  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onEnterPressed(value);
    }
  };
  return <input className="search-input" type='text' onChange={onInputChange} value={value} onKeyUp={onKeyUp}/>
};
