import React from 'react';
import classnames from 'classnames';
import './profilePicture.scss';

export const ProfilePicture = ({ photoUrl, classNames }) =>
  (<img src={photoUrl} className={classnames('profile-picture', classNames)}/>);

