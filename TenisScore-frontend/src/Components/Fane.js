import React from 'react';
import './Purice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import faneImage from './fane.jpg';
import { Link } from 'react-router-dom';
const Fane = () => {
  const setsWon = 14;
  const lostSets = 13;
  const totalSets = setsWon + lostSets;
  const winRatio = totalSets > 0 ? ((setsWon / totalSets) * 100).toFixed(2) : 0;

  const lastMatches = ['Î', 'V', 'Î']; // Example last matches data

  return (
    <div className="purice-container">
      <img src={faneImage} alt="Purice" className="purice-picture" />
      <div className="purice-info">
      <div className="stat">
         
         <span className="stat-text-score">1-2</span>
       </div>
        <div className="stat">
          <FontAwesomeIcon icon={faCaretUp} className="icon" />
          <span className="stat-text">Won Sets: {setsWon}</span>
        </div>
        <div className="stat">
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
          <span className="stat-text">Lost Sets: {lostSets}</span>
        </div>
        <div className="stat">
          <FontAwesomeIcon icon={faTrophy} className="icon" />
          <span className="stat-text">Titles: 0</span>
        </div>
        <div className="stat">
          <FontAwesomeIcon icon={faCaretUp} className="icon" />
          <span className="stat-text"> Ratio: {winRatio}%</span>
        </div>
        <div className="last-matches">
          <h3>Last Matches:</h3>
          <ul>
          {lastMatches.slice(Math.max(lastMatches.length - 3, 0)).reverse().map((match, index) => (
                  <span key={index} className={`badge badge-${match === 'V' ? 'success' : 'danger'}`}>
                    {match}
                  </span>
                ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/details" className="btn btn-primary">Back to Main Page</Link>

      </div>
    </div>
  );
};

export default Fane;
