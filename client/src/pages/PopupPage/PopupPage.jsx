import React, { useState } from 'react';
import BookComponent from '../../components/PopUp/PopUp';

// Make sure that the BookComponent import path is correct

function PopUp() {
  // Define openPopup and closePopup functions
  const [isOpen, setIsOpen] = useState(true); // This will start the popup as open
  
  // Define the closePopup function to change isOpen to false
  const closePopup = () => setIsOpen(false);

  return (
    <BookComponent isOpen={isOpen} closePopup={closePopup} />
  );
}

export default PopUp;
