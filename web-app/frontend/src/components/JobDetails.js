import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import api from '../services/api';
import './JobDetails.css'

function JobDetails() {
  const {id} = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const jobStates = {
    "active": "🟢",
    "inactive": "🔴"
  }

  useEffect(() => {
    (async () => {
      try {
        const jobData = await api.getJob(id);
        setJob(jobData);
      } catch (err) {
        setError(err);
      }
    })();
  }, [id]);


  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="job-details-container">
      {job && (
        <div className="job-details-card">
          <h1>{job.req_name}</h1>

          <p>
            <h2>Status: {job.status} {jobStates[job.status.toLowerCase()]}</h2>
          </p>

          <h2>Postings:</h2>
            <table>
              <thead>
                <tr>
                  <th>Site Name</th>
                  <th>ID</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {job.postings.map((posting) => (
                  <tr key={posting.id}>
                    <td>{posting.sitename}</td>
                    <td>{posting.id}</td>
                    <td>{posting.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          <p>
            <h2>Description:</h2>
            {job.description}
          </p>

          <p>
            <h2>Location:</h2>
            {`${job.location.city}, ${job.location.state}, ${job.location.country}`}
          </p>

          <Link to="/">Back to Job List</Link>

        </div>
      )}
    </div>
  );
}

export default JobDetails;