import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongUploadForm from '../SongUploadForm';

function SongEditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SongUploadForm />
        </Modal>
      )}
    </>
  );
}

export default SongEditFormModal;