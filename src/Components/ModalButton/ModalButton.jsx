import { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalButton.css';

const ModalButton = ({ buttonText, modalContent }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="button-with-modal">
      <button onClick={toggleModal}>{buttonText}</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

ModalButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    modalContent: PropTypes.string.isRequired
  };

export default ModalButton;