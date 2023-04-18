import React, { useContext } from 'react'
import usersDataMock from '../mocks/userData.mock';
import Html5QrcodePlugin from '../components/Html5QrcodePlugin';
import MyContext from '../context/MyContext';
import UserCard from '../components/UserCard';

export default function QRCodeCheck() {
  const { user, setUser } = useContext(MyContext);

  const handleQRCodeSuccess = (decodedText) => {
    const userInDB = usersDataMock.find((user) => user.name === decodedText);
    setUser(userInDB);
    
  };

  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={ 10 }
        qrbox={ 250 }
        disableFlip={ false }
        qrCodeSuccessCallback={ handleQRCodeSuccess }
      />
      {
        user &&
        <UserCard
          name={ user.name }
          lastName={ user.lastName }
          address={ user.address }
          email={ user.email }
          vehicleModel={ user.vehicleModel }
          vehicleYear={ user.vehicleYear }
        />
      }
    </div>
  )
}
