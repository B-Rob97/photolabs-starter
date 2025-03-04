import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  
  function handleClick() {
    props.setShowModal && props.setShowModal(false);
}

const similarPhotosArray = props.similar_photos_modal;

const renderPhotoListItem = (photo) => {
  return (
      <PhotoListItem
          key={photo.id}
          id={photo.id}
          regular={photo.urls.regular}
          full={photo.urls.full}
          name={photo.user.name}
          location={photo.location}
          profile={photo.user.profile}
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          setSelectedImage={props.setSelectedImage}
          similar_photos={props.similar_photos}
          darkMode={props.darkMode}
      />
  );
}

  return (
    <div>
      <div className={props.darkMode ? "photo-details-modal-dark-mode": "photo-details-modal"} >
        <button className={props.darkMode? "photo-details-modal__close-button-dark-mode" : "photo-details-modal__close-button"} onClick={handleClick} >
        <img className='close-symbol' src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>

        <PhotoFavButton favourites={props.favourites} toggleFavourite={props.toggleFavourite} id={props.id} darkMode={props.darkMode}/>
        <img className="photo-details-modal__image" src={props.full} alt="User image" />
        <header className={props.darkMode?'photo-details-modal__header-dark-mode' : 'photo-details-modal__header'}>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={props.profile} alt="Profile" />
            <div className="photo-details-modal__photographer-info">{props.name}
              <div 
              className={props.darkMode ? "photo-details-modal__photographer-location-dark-mode" : "photo-details-modal__photographer-location"}>{props.location.city}, {props.location.country}
              </div>
            </div>
          </div>
          <div className={props.darkMode ? "photo-details-modal__top-bar-dark-mode" : "photo-details-modal__top-bar"} >
            <h4>Similar Photos</h4>
          </div>
            <div className='similar-photo-list'>
              {similarPhotosArray.map((photo)=> (renderPhotoListItem(photo)))}
            </div>
        </header>
      </div>
    </div>
    </div>
    
  )
};

export default PhotoDetailsModal;
