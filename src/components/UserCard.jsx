import '../style/UserCard.css'
import React from "react";

function UserCard({ name, lastName, address, email, vehicleModel, vehicleYear }) {

  return (
    <div className="user-card">
      <h2>{name} {lastName}</h2>
      <p><strong>Endereço:</strong> {address}</p>
      <p><strong>E-mail:</strong> {email}</p>
      <p><strong>Veículo:</strong> {vehicleModel} ({vehicleYear})</p>
    </div>
  );
}

export default UserCard;
