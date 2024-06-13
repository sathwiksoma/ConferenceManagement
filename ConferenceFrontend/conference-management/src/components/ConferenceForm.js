import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import conferenceService from '../services/conferenceService';

function ConferenceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [conference, setConference] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    organizerID: 1 // Should be dynamic based on logged-in user
  });

  useEffect(() => {
    if (id) {
      conferenceService.getConference(id).then(response => {
        setConference(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConference({
      ...conference,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      conferenceService.updateConference(id, conference).then(() => {
        navigate("/conferences");
      });
    } else {
      conferenceService.createConference(conference).then(() => {
        navigate("/conferences");
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{id ? "Edit Conference" : "Create Conference"}</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={conference.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={conference.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={conference.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={conference.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">{id ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
}

export default ConferenceForm;
