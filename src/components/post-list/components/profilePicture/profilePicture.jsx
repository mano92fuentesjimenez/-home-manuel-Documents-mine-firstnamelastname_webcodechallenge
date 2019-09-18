import React from 'react';
import './profilePicture.scss';

const fallbackImage = '/WarningSign.jpg';
const invalidPhotos = ['', 'default', 'self', null, undefined];
export const ProfilePicture = ({ photoUrl }) =>{
  const imageSrc = invalidPhotos.includes(photoUrl) ? fallbackImage : photoUrl;
  return  (
    <img src={imageSrc} className={'profile-picture'}/>
  )
}
