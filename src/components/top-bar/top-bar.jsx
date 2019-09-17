import React from 'react';
import './top-bar.sass';
import { SearchInput } from "./components/searchInput";
import { connect } from 'react-redux';
import { selectSearchText } from "./selectors";
import { onTextChange } from "./actions";

const TopBar = ({ value, onTextChange }) => {
  const onChange = text => onTextChange(text);

  return <div className="top-bar-container">
    <div className="top-bar-content-container">
      <span className="top-bar-text"> Reddit</span>
      <SearchInput onChange={onChange} value={value}/>
    </div>
  </div>
};

const mapStateToProps = state => ({
  value: selectSearchText(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTextChange: (value) => dispatch(onTextChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
