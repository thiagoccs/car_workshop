import './App.css';
import Html5QrcodePlugin from './components/Html5QrcodePlugin';
import React, { useCallback, useState } from 'react';
import usersDataMock from './mocks/userData.mock';

function App() {
  const [user, setUser] = useState("");

  const handleQRCodeSuccess = (decodedText) => {
    console.log(decodedText);
    const userInDB = usersDataMock.find((user) => user.name === decodedText);
    setUser(userInDB);
  };

  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={handleQRCodeSuccess}
      />
      {
        user && <h1>{`usuário: ${user.name}, carro: ${user.vehicleModel}`}</h1>
      }
    </div>
  );
}

export default App;
