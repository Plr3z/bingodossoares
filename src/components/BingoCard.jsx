import React from 'react';
import './BingoCard.css';

const BingoCard = ({ drawnNumbers }) => {
  const generateBingoCard = () => {
    const columns = {
      B: Array.from({ length: 15 }, (_, i) => i + 1),
      I: Array.from({ length: 15 }, (_, i) => i + 16),
      N: Array.from({ length: 15 }, (_, i) => i + 31),
      G: Array.from({ length: 15 }, (_, i) => i + 46),
      O: Array.from({ length: 15 }, (_, i) => i + 61),
    };

    return Object.keys(columns).map(letter => ({
      letter,
      numbers: columns[letter].sort(() => Math.random() - 0.5).slice(0, 5),
    }));
  };

  const card = generateBingoCard();

  return (
    <div className="bingo-card">
      {card.map(col => (
        <div key={col.letter} className="column">
          <div className="header">{col.letter}</div>
          {col.numbers.map(num => (
            <div key={num} className={`number ${drawnNumbers.includes(num) ? 'drawn' : ''}`}>
              {num}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BingoCard;
