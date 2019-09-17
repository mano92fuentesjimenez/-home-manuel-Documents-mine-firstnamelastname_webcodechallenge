import React from 'react';
export const SearchInput = ({ value, onChange, onEnterPressed })=> {
  const onInputChange = (e) => onChange(e.target.value);
  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onEnterPressed(value);
    }
  };
  return <input type='text' onChange={onInputChange} value={value} onKeyUp={onKeyUp}/>
};
