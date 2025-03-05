import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NavigationButtons = ({ prevPath, nextPath }) => {
  const navigate = useNavigate();

  const handlePrev = () => {
    if (prevPath) {
      navigate(prevPath);
    } else {
      navigate(-1); // Volta para a página anterior no histórico
    }
  };

  const handleNext = () => {
    if (nextPath) {
      navigate(nextPath);
    } else {
      console.log('Nenhuma próxima página definida');
    }
  };

  return (
    <div className="d-flex justify-content-between my-4">
      <Button variant="primary" onClick={handlePrev} aria-label="Voltar para a página anterior">
        <FaArrowLeft /> Anterior
      </Button>
      <Button variant="success" onClick={handleNext} aria-label="Ir para a próxima página">
        Próxima <FaArrowRight />
      </Button>
    </div>
  );
};

export default NavigationButtons;