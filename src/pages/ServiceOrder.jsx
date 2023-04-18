import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import UserCard from '../components/UserCard';
import CarPartsInput from '../components/CarPartsInput';
import carPartsMock from '../mocks/carParts.mock';

export default function ServiceOrder() {
  const { user } = useContext(MyContext);
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
      <CarPartsInput
        carPartsMock={carPartsMock}
      />
    </div>
  )
}
