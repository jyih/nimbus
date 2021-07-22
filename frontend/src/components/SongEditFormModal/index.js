import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongEditForm from '../SongEditForm';
import SongUploadForm from '../SongUploadForm';

function SongEditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <SongEditForm /> */}
          <SongUploadForm />
        </Modal>
      )}
    </>
  );
}

export default SongEditFormModal;