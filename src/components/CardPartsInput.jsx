import React, { useState, useEffect } from 'react';
import '../style/CardPartsInput.css'

const CardPartsInput = ({ carPartsMock }) => {
  const [showParts, setShowParts] = useState(false);
  const [selectedParts, setSelectedParts] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (selectedParts.length > 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [selectedParts]);

  const handleSelectPart = (event) => {
    const selectedPart = event.target.value;
    const partValue = carPartsMock.find((part) => part.name === selectedPart)?.value;
    if (partValue) {
      setSelectedParts([...selectedParts, { name: selectedPart, value: partValue }]);
    }
  };

  const handleRemovePart = (partIndex) => {
    const updatedParts = [...selectedParts];
    updatedParts.splice(partIndex, 1);
    setSelectedParts(updatedParts);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('carParts', JSON.stringify(selectedParts));
    setSelectedParts([]);
    setCanSubmit(false);
  };

  return (
    <div className="CardPartsInput">
      <button onClick={() => setShowParts(!showParts)}>Envolver peças</button>
      {showParts && (
        <form onSubmit={handleFormSubmit}>
          {selectedParts.map((part, index) => (
            <div key={index}>
              <span>{part.name} - R${part.value}</span>
              <button type="button" onClick={() => handleRemovePart(index)}>
                Remover
              </button>
            </div>
          ))}
          <select onChange={handleSelectPart}>
            <option value="">Selecione uma peça</option>
            {carPartsMock.map((part) => (
              <option key={part.id} value={part.name}>
                {part.name}
              </option>
            ))}
          </select>
          <button type="submit" disabled={!canSubmit}>
            Submeter
          </button>
        </form>
      )}
    </div>
  );
};

export default CardPartsInput;
