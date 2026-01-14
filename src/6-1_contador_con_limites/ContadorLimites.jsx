import { useState } from 'react';
import './ContadorLimites.css';

function ContadorLimites() {
  const [contador, setContador] = useState(0);
  const MAX = 5;
  const MIN = -5;

  return (
    <div className="contador-wrapper">
      <div className="numero-grande">{contador}</div>
      <div className="botones-ctrl">
        <button disabled={contador === MIN} onClick={() => setContador(contador - 1)}>-</button>
        <button disabled={contador === MAX} onClick={() => setContador(contador + 1)}>+</button>
      </div>
      {contador === MAX && <p className="msg alerta">Tope Máximo</p>}
      {contador === MIN && <p className="msg info">Tope Mínimo</p>}
    </div>
  );
}

export default ContadorLimites;