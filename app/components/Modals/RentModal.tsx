'use client';

import useRentModal from '@/app/hooks/useRentModal';

import Modal from './Modal';
import { useState } from 'react';

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGE$ = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [step, setStep] = useState(
    STEPS.CATEGORY
  );
  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };


// Continuar aqui 3:22

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
