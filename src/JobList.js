import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";

/** Component that gets a list of all jobs
 * 
 *  Props:
 *  - None 
 *  
 *  State:
 *  - jobList:
 *    { jobs: 
 *      [ { id, title, salary, equity, companyHandle, companyName }, ...] 
 *    }
 * 
 *  Routes -> JobList -> { SearchForm, JobCardList }
 */
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
            <JobCardList jobList={jobList}/>
        </div>
    )
}
export default JobList;