import React from 'react';
import './top-bar.sass';
import { SearchInput } from "./components/searchInput";

export const TopBar = () => {

  return <div className="top-bar-container">
    <div className="top-bar-content-container">
      <span className="top-bar-text"> Reddit</span>
      <SearchInput/>
    </div>
  </div>
};
