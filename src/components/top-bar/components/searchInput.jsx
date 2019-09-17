import React from 'react';
export const SearchInput = ({ value, onChange })=> {
  const onInputChange = (e) => onChange(e.target.value);
  return <input type='text' onChange={onInputChange} value={value}/>
};
