import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import conferenceService from '../services/conferenceService';

function ConferenceDetail() {
  const { id } = useParams();
  const [conference, setConference] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    conferenceService.getConference(id)
      .then(response => {
        setConference(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching conference:', error);
        // Handle error: setConference(null) or show error message
        setLoading(false); // Ensure loading is turned off in case of error
      });
  }, [id]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!conference) {
    return <div className="container">Conference not found.</div>;
  }

  return (
    <div className="container">
      <h2>{conference.title}</h2>
      <p>{conference.description}</p>
      <p><strong>Date:</strong> {conference.date ? new Date(conference.date).toLocaleDateString() : 'Not specified'}</p>
      <p><strong>Location:</strong> {conference.location}</p>
    </div>
  );
}

export default ConferenceDetail;
