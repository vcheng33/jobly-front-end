import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

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
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(function fetchJobListOnLoad() {
        async function fetchJobList() {
            const jobsResult = await JoblyApi.getJobs({"title": searchTerm});
            setJobList(jobsResult);
        }
        fetchJobList();
    }, [searchTerm]);

    function handleSearch(formData) {
        setSearchTerm(formData.searchTerm);
    }

    if (jobList === null) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <SearchForm handleSearch={handleSearch} />
            <JobCardList jobList={jobList}/>
        </div>
    )
}
export default JobList;