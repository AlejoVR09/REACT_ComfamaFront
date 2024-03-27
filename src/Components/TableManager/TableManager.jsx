import React, { useState } from 'react';
import AddDataModal from '../AddDataModal/AddDataModal';

const TableManager = ({ onAddData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddData = (newData) => {
    onAddData(newData);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>Agregar Dato</button>
      {modalOpen && <AddDataModal onSave={handleAddData} onClose={closeModal} />}
    </>
  );
};

export default TableManager;