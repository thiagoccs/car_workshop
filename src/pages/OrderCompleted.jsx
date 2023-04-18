import React, { useState, useEffect } from "react";
import LogoutLink from '../components/LogoutLink';

const OrderCompleted = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedMechanic, setSelectedMechanic] = useState("");
  const [user, setUser] = useState("");
  const [carParts, setCarParts] = useState([]);
  const [ordersLocalStorage, setOrdersLocalStorage] = useState([]);

  useEffect(() => {
    const currentDateData = JSON.parse(localStorage.getItem("currentDate"));
    const selectedMechanicData = JSON.parse(localStorage.getItem("selectedMechanic"));
    const userData = JSON.parse(localStorage.getItem("user"));
    const carPartsData = JSON.parse(localStorage.getItem("carParts"));

    setCurrentDate(currentDateData);
    setSelectedMechanic(selectedMechanicData);
    setUser(userData);
    setCarParts(carPartsData);

  }, []);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = {
      id: orders.length + 1,
      mechanic: selectedMechanic.name,
      client: user.name + " " + user.lastName,
      address: user.address,
      vehicle: user.vehicleModel + " (" + user.vehicleYear + ")",
      parts: carParts.map(part => part.name + " " + part.value).join(", "),
      date: currentDate.date,
      hour: currentDate.hour
    };
    orders.push(order);
    setOrdersLocalStorage(order)
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [currentDate, selectedMechanic, user, carParts]);

  return (
    <div>
      <div>
        <h1>Nota de Serviço</h1>
        {selectedMechanic && <p>Mecânico Responsável: {selectedMechanic.name}</p>}
        {user && <p>Cliente: {user.name} {user.lastName}</p>}
        {user && <p>Endereço: {user.address}</p>}
        {user && <p>Veículo: {user.vehicleModel} ({user.vehicleYear})</p>}
        {ordersLocalStorage.length > 0 && <p>Peças: {carParts.map(part => part.name + " " + part.value).join(", ")}</p>}
        {currentDate && <p>Data: {currentDate.date} Hora: {currentDate.hour}</p>}
      </div>
      <LogoutLink />
    </div>
  );
};

export default OrderCompleted;
