import React from 'react';
import classnames from 'classnames';
import './actionCard.scss';

export const ActionCard = ({imgPath, actionName, actionText}) => {

  return <div className={classnames("post-card-container", actionName, "action-card-container")}>
    <img src={imgPath} />
    <span>{actionText}</span>
  </div>
}
