import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobList() {
    const [jobList, setJobList ] = useState(null);

    useEffect(function fetchJobListOnLoad() {
        async function fetchJobList() {
            const jobsResult = await JoblyApi.getJobs();
            setJobList(jobsResult);
        }
        fetchJobList();
    }, []);

    if (jobList === null) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {jobList.map(j => (
                <JobCard
                    key={j.id} 
                    title={j.title}
                    salary={j.salary}
                    equity={j.equity}
                />
            ))}
        </div>
    )
}
export default JobList;