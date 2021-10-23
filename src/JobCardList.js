import JobCard from "./JobCard";

/** Component that takes jobList and renders
 *  JobCard for every job in the list
 * 
 *  Props:  
 *  - jobList:
 *      [ { id, title, salary, equity, companyHandle, companyName }, ...]
 * 
 *  State:
 *  - None
 * 
 *  { CompanyDetail, JobList } 
 *      -> JobCardList 
 *      -> JobCard
 */

function JobCardList({ jobList }) {

    return (
        <div>
            {jobList.map(j => (
                <JobCard
                    key={j.id}
                    id={j.id}
                    title={j.title}
                    salary={j.salary === null
                        ? "Ask Company Representative"
                        : `$${j.salary.toLocaleString()}`
                    }
                    equity={`${(Number(j.equity) * 100).toFixed(2)}%`}
                />
            ))}
        </div>
    )
}
export default JobCardList;