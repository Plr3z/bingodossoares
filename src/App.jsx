import React, { useState } from 'react';
import './App.css';

function App() {
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const bingoNumbers = Array.from({ length: 75 }, (_, i) => i + 1);

  const drawNumber = () => {
    const remainingNumbers = bingoNumbers.filter(num => !drawnNumbers.includes(num));
    if (remainingNumbers.length > 0) {
      const randomNumber = remainingNumbers[Math.floor(Math.random() * remainingNumbers.length)];
      setDrawnNumbers([...drawnNumbers, randomNumber]);
      setCurrentNumber(randomNumber);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);  // Mostra o popup por 2 segundos
    } else {
      alert('Todos os números já foram sorteados!');
    }
  };

  const getCategory = (num) => {
    if (num <= 15) return 'B';
    if (num <= 30) return 'I';
    if (num <= 45) return 'N';
    if (num <= 60) return 'G';
    return 'O';
  };

  return (
    <div className="app">
      <h1>Bingo Dos Soares</h1>
      <div className="current-number">
        {currentNumber ? <h2 style={{fontSize: 40}}>{getCategory(currentNumber)} - {currentNumber}</h2> : <h2>Aguardando sorteio...</h2>}
      </div>
      <button onClick={drawNumber}>Sortear Número</button>
      <div className="number-grid">
        {bingoNumbers.map(num => (
          <div key={num} className={`number ${drawnNumbers.includes(num) ? 'marked' : ''}`}>
            {num}
          </div>
        ))}
      </div>

      {/* Pop-up para o número sorteado */}
      {showPopup && currentNumber && (
        <div className="popup">
          <div className="popup-content">
            <h2 style={{fontSize: 140}}>{getCategory(currentNumber)} - {currentNumber}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
