import React from 'react';
import './Details.css'; // Import custom CSS for Details component
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// Import profile pictures
import faneImage from './fane.jpg';
import andiImage from './andi.jpg';
import lupuImage from './lupu.jpeg';
import puriceImage from './purice.jpeg';

const Details = () => {
  // Sample player data with scores and last matches
  const players = [
    { name: 'Purice', wins: 3, titles: 1, lastMatches: ['V', 'V', 'V' ], image: puriceImage },
    { name: 'Andi', wins: 2, titles: 0, lastMatches: ['V', 'Î', 'V'], image: andiImage },
    { name: 'Fane', wins: 1, titles: 0, lastMatches: ['Î', 'V', 'Î'], image: faneImage },
    { name: 'Lupu', wins: 0, titles: 0, lastMatches: ['Î', 'Î', 'Î'], image: lupuImage }
  ];

  // Sort players by score
  const sortedPlayers = players.sort((a, b) => b.wins - a.wins);

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-5">Leaderboard</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Last Matches</th>
            <th>
              Titles
              <FontAwesomeIcon icon={faTrophy} className="ml-2" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="d-flex align-items-center">
  <img src={player.image} alt={player.name} className="profile-picture mr-2" />
  <Link to={`/${player.name.toLowerCase()}`} className='player-name'>{player.name}</Link>
</td>

              <td>{player.wins}</td>
              <td>
              {player.lastMatches.slice(Math.max(player.lastMatches.length - 3, 0)).reverse().map((match, index) => (
                  <span key={index} className={`badge badge-${match === 'V' ? 'success' : 'danger'}`}>
                    {match}
                  </span>
                ))}
              </td>
              <td>{player.titles}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Back to Tournaments Page</Link>

      </div>
      

      {/* History matches section */}
      <div className="history-matches mt-5">
        <h3 className="text-center mb-3">21.04.2024</h3>
        <div className="list-group">
          <div className="list-group-item">
            <div className="match-info d-flex justify-content-between align-items-center">
              <div className="players d-flex align-items-center">
                <img src={puriceImage} alt="Purice" className="profile-picture-small mr-2" />
                <span>Purice</span>
                <span className="mx-1">-</span>
                <span>Lupu</span>
                <img src={lupuImage} alt="Lupu" className="profile-picture-small ml-2" />
              </div>
              <div className="score">
                <span>6-2</span>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="match-info d-flex justify-content-between align-items-center">
              <div className="players d-flex align-items-center">
                <img src={andiImage} alt="Andi" className="profile-picture-small mr-2" />
                <span>Andi</span>
                <span className="mx-2">-</span>
                <span>Fane</span>
                <img src={faneImage} alt="Fane" className="profile-picture-small ml-2" />
              </div>
              <div className="score">
                <span>6-5</span>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="match-info d-flex justify-content-between align-items-center">
              <div className="players d-flex align-items-center">
                <img src={lupuImage} alt="Lupu" className="profile-picture-small mr-2" />
                <span>Lupu</span>
                <span className="mx-2">-</span>
                <span>Fane</span>
                <img src={faneImage} alt="Fane" className="profile-picture-small ml-2" />
              </div>
              <div className="score">
                <span>3-6</span>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="match-info d-flex justify-content-between align-items-center">
              <div className="players d-flex align-items-center">
                <img src={andiImage} alt="Andi" className="profile-picture-small mr-2" />
                <span>Andi</span>
                <span className="mx-1">-</span>
                <span>Purice</span>
                <img src={puriceImage} alt="Purice" className="profile-picture-small ml-2" />
              </div>
              <div className="score">
                <span>4-6</span>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="match-info d-flex justify-content-between align-items-center">
              <div className="players d-flex align-items-center">
                <img src={lupuImage} alt="Lupu" className="profile-picture-small mr-2" />
                <span>Lupu</span>
                <span className="mx-2">-</span>
                <span>Andi</span>
                <img src={andiImage} alt="Andi" className="profile-picture-small ml-2" />
              </div>
              <div className="score">
                <span>1-4</span>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="match-info d-flex justify-content-between align-items-center">
              <div className="players d-flex align-items-center">
                <img src={puriceImage} alt="Purice" className="profile-picture-small mr-2" />
                <span>Purice</span>
                <span className="mx-1">-</span>
                <span>Fane</span>
                <img src={faneImage} alt="Fane" className="profile-picture-small ml-2" />
              </div>
              <div className="score">
                <span>4-3</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center mb-3">27.04.2024</h3>
      </div>
    </div>
  );
};

export default Details;
