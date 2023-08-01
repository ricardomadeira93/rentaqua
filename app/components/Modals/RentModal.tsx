"use client"

import useRentModal from '@/app/hooks/useRentModal';

import Modal from './Modal';

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <div>
      <Modal
        title='Rent your Splash!'
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel='Submit'
      />
    </div>
  );
};

export default RentModal;
