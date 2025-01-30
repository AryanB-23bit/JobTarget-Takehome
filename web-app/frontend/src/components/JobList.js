import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';
import './JobList.css';

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const darkMode = true;

    useEffect(() => {
        (async () => {
            try {
                const jobsData = await api.getJobs();
                setJobs(jobsData);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filterJobs = jobs.filter((job) => {
        const idMatch = job.id.toString().includes(searchQuery);
        const nameMatch = job.req_name.toLowerCase().includes(searchQuery.toLowerCase());
        return idMatch || nameMatch;
    });

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className={`job-list-container ${darkMode}`}>
            <h1>Job List</h1>

            <input
                type="text"
                placeholder="Search by Name or Job ID"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />

            <div className="job-cards-container">
                {filterJobs.length !== 0 ? (
                    filterJobs.map((job) => (
                        <div className="job-card" key={job.id}>
                            <h2>
                                <Link to={`/jobs/${job.id}`}>{job.req_name}</Link>
                            </h2>
                            <p>ID: {job.id}</p>
                        </div>
                    ))
                ) : (
                    <p>No jobs found with {searchQuery}...</p>
                )}
            </div>
        </div>
    );
}

export default JobList;