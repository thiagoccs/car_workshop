import React, { useContext, useEffect } from 'react'
import MyContext from '../context/MyContext';
import UserCard from '../components/UserCard';
import CardPartsInput from '../components/CardPartsInput';
import cardPartsMock from '../mocks/cardsParts.mock';
import CardMechanic from '../components/CardMechanic';
import OrderReady from '../components/OrderReady';

export default function ServiceOrder() {
  const { user, selectedMechanic, setSelectedMechanic, } = useContext(MyContext);

  useEffect(() => {
    const mechanic = JSON.parse(localStorage.getItem('selectedMechanic'));
    if (mechanic) {
      setSelectedMechanic(mechanic);
    }
  }, []);

  return (
    <div>
      {
        user &&
        <UserCard
          name={user.name}
          lastName={user.lastName}
          address={user.address}
          email={user.email}
          vehicleModel={user.vehicleModel}
          vehicleYear={user.vehicleYear}
        />
      }
      <CardPartsInput
        carPartsMock={cardPartsMock}
      />
      {
        selectedMechanic &&
        <CardMechanic
          mechanic={selectedMechanic}
        />
      }
      <OrderReady />
    </div>
  )
}
