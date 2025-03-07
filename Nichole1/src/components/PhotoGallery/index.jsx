import React, { useState } from 'react';
import './PhotoGallery.css';

import gallery1 from '../../assets/images/gallery1.jpg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/gallery3.jpg';
import gallery4 from '../../assets/images/gallery4.jpg';
import gallery5 from '../../assets/images/gallery5.jpg';
import gallery6 from '../../assets/images/gallery6.jpg';
import gallery7 from '../../assets/images/gallery7.jpg';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const photos = [
    {
      id: 1,
      url: gallery1,
      title: 'Evening with Friends',
      description: 'Evening selfie with a friend under beautiful fairy lights in an outdoor setting, creating a warm and magical atmosphere.',
      category: 'Friends'
    },
    {
      id: 2,
      url: gallery2,
      title: 'Café Gathering',
      description: 'Enjoying coffee and pastries with friends at a cozy café with large windows overlooking the city.',
      category: 'Food & Drinks'
    },
    {
      id: 3,
      url: gallery3,
      title: 'Ocean Sunset',
      description: 'Watching a breathtaking golden sunset over the ocean from a scenic viewpoint, with sunlight streaming through the clouds.',
      category: 'Nature'
    },
    {
      id: 4,
      url: gallery4,
      title: 'Tropical Garden',
      description: 'Relaxing in a lush green outdoor setting on a comfortable wicker chair, surrounded by tropical plants.',
      category: 'Relaxation'
    },
    {
      id: 5,
      url: gallery5,
      title: 'Dinner Celebration',
      description: 'Dinner gathering with a group of friends at a restaurant, celebrating and enjoying each other\'s company.',
      category: 'Social'
    },
    {
      id: 6,
      url: gallery6,
      title: 'Café Work Session',
      description: 'Working session at a café with colleagues, sharing ideas over coffee with a laptop on the table.',
      category: 'Work'
    },
    {
      id: 7,
      url: gallery7,
      title: 'Bakery Exploration',
      description: 'Browsing delicious pastries and baked goods at a bakery counter, exploring culinary creations.',
      category: 'Culinary'
    }
  ];

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="section-title">Photo Gallery</h2>
      <p className="section-description">
        A collection of moments captured through my lens. These photos represent my journey, interests, and the beauty I find in everyday life.
      </p>
      
      <div className="gallery-grid">
        {photos.map(photo => (
          <div 
            key={photo.id} 
            className="gallery-item"
            onClick={() => openPhotoModal(photo)}
          >
            <div className="photo-container">
              <img src={photo.url} alt={photo.title} className="gallery-image" />
            </div>
            <div className="photo-info">
              <h3>{photo.title}</h3>
              <span className="photo-category">{photo.category}</span>
            </div>
          </div>
        ))}
      </div>
      
      {selectedPhoto && (
        <div className="photo-modal" onClick={closePhotoModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-modal" onClick={closePhotoModal}>&times;</span>
            <div className="modal-photo-container">
              <img src={selectedPhoto.url} alt={selectedPhoto.title} className="modal-image" />
            </div>
            <div className="modal-photo-info">
              <h3>{selectedPhoto.title}</h3>
              <span className="photo-category">{selectedPhoto.category}</span>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
