import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import usersDataMock from '../mocks/userData.mock';
import mechanicMock from '../mocks/mechanic.mock';
import Html5QrcodePlugin from '../components/Html5QrcodePlugin';
import MyContext from '../context/MyContext';

export default function QRCodeCheck() {
  const { user, setUser, selectedMechanic, setSelectedMechanic } = useContext(MyContext);

  const handleQRCodeSuccess = (decodedText) => {
    const userInDB = usersDataMock.find((user) => user.name === decodedText);
    localStorage.setItem('user', JSON.stringify(userInDB));
    setUser(userInDB);
  };

  const handleMechanicChange = (event) => {
    localStorage.setItem('selectedMechanic', JSON.stringify({name: event.target.value}));
    setSelectedMechanic(event.target.value);
  };

  return (
    <div>
      {user === "" ? (
        <>
          <h1>Leitor de QR Code</h1>
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={handleQRCodeSuccess}
          />
        </>
      ) : (
        <>
          <form>
            <label htmlFor="mechanic">Escolha um mecânico:</label>
            <select id="mechanic" name="mechanic" onChange={handleMechanicChange}>
              <option value="">Selecione um mecânico</option>
              {mechanicMock.map(mechanic => (
                <option key={mechanic.id} value={mechanic.name}>{mechanic.name}</option>
              ))}
            </select>
          </form>
          {
            selectedMechanic && (
              <Link to="/serviceOrder">
                <button>Ir para a página de ordem de serviço</button>
              </Link>
            )
          }
        </>
      )}
    </div>
  )
};
