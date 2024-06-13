import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import conferenceService from '../services/conferenceService';

function ConferenceDetail() {
  const { id } = useParams();
  const [conference, setConference] = useState(null);

  useEffect(() => {
    conferenceService.getConference(id).then(response => {
      setConference(response.data);
    });
  }, [id]);

  if (!conference) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{conference.title}</h2>
      <p>{conference.description}</p>
      <p><strong>Date:</strong> {new Date(conference.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {conference.location}</p>
    </div>
  );
}

export default ConferenceDetail;
