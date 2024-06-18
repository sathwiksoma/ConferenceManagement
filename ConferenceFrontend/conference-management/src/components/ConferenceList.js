import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import conferenceService from '../services/conferenceService';

function ConferenceList() {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    conferenceService.getConferences().then(response => {
      setConferences(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    conferenceService.deleteConference(id).then(() => {
      setConferences(conferences.filter(conference => conference.conferenceID !== id));
    });
  };

  return (
    <div className="container">
      <div className="my-4">
        <h2>Conferences</h2>
        <Link to="/create" className="btn btn-primary mb-2">Create Conference</Link>
      </div>
      
      <ul className="list-group">
        {conferences.map(conference => (
          <li key={conference.conferenceID} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/conferences/${conference.conferenceID}`} className="text-dark font-weight-bold">{conference.title}</Link>
            <div>
              <Link to={`/edit/${conference.conferenceID}`} className="btn btn-secondary btn-sm mr-2">Edit</Link>
              <button onClick={() => handleDelete(conference.conferenceID)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConferenceList;
