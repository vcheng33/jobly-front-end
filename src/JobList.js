import { useState, useEffect } from "react";

import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

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
 *  - searchTerm from searchForm
 *  - error: [errorMessage if applicable]
 * 
 *  Routes -> JobList -> { SearchForm, JobCardList, Loading }
 */
function JobList() {
    const [jobList, setJobList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);

    useEffect(function fetchJobListOnLoad() {
        async function fetchJobList() {
            try {
                const jobsResult = await JoblyApi.getJobs({ "title": searchTerm });
                setJobList(jobsResult);
            } catch (err) {
                setError(err);
            }
        }
        fetchJobList();
    }, [searchTerm]);

    function handleSearch(formData) {
        setSearchTerm(formData.searchTerm);
    }

    if (jobList === null && error === null) {
        return <Loading />
    }

    if (jobList.length === 0) {
        return (
            <div>
                <div className="JobCardList col-md-8 offset-md-2 text-center mb-4">
                    <SearchForm handleSearch={handleSearch} />
                    <h2>No Results Found</h2>
                </div>
            </div>
        )
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="JobCardList col-md-8 offset-md-2">
            <SearchForm handleSearch={handleSearch} />
            <JobCardList jobList={jobList} />
        </div>
    )
}
export default JobList;