import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

export default function OrderReady() {
  const {ready, setReady} = useContext(MyContext);

  const handleReadyChange = (e) => {
    if (e.target.checked) {
      const now = new Date();
      const date = now.toLocaleDateString('pt-BR');
      const hour = now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit', second:'2-digit'});
      localStorage.setItem('currentDate', JSON.stringify({date, hour}));
    } else {
      localStorage.removeItem('currentDate');
    }
    setReady(e.target.checked);
  }

  return (
    <div>
      <h1>Ordem de serviço pronta?</h1>
      <div className="form-check">
        <input 
          type="checkbox"
          className="form-check-input"
          id="ready"
          checked={ready}
          onChange={handleReadyChange}
        />
        <label className="form-check-label" htmlFor="ready">
          Sim, está pronta!
        </label>
      </div>
      {ready && (
        <Link to="/orderCompleted">
          <button>Ir para a página de ordem concluída</button>
        </Link>
      )}
    </div>
  );
}
