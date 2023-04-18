import React from 'react';
import '../style/MechanicCard.css'

export default function CardMechanic({ mechanic }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Mecânico</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{ mechanic.name }</p>
      </div>
    </div>
  );
}