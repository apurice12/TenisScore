import React from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fane from './fane.jpg';
import andi from './andi.jpg';
import lupu from './lupu.jpeg';
import purice from './purice.jpeg';
const MainPage=()=> {
    const tournaments = [
        {
            id: 1,
            name: "Open Tennis Championship",
            date: "April 21 - December 31, 2024",
            location: "Studențesc Tei",
            participants: [fane, andi, lupu, purice]
        },
    
    ];
  return (
   <div className='main-content'>
    <div className="container py-5">
            <div className="row">
                {tournaments.map((tournament) => (
                    <div key={tournament.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img-top" >
                                <div className="d-flex flex-row" style={{ position: 'absolute', top: '0px', left: '1.3px' }}>
                                {tournament.participants.map((src, index) => (
                                <img key={index} src={src} alt="Participant" className={`participant-avatar ${index > 0 ? 'participant-avatar-overlap' : ''}`} style={{ left: `${index * 40.5}px` }} />
                            ))}
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{tournament.name}</h5>
                                <p className="card-text">{tournament.date} | {tournament.location}</p>
                                <Link to ="/details" className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MainPage