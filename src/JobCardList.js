import JobCard from "./JobCard";

/** Component that takes jobList and renders
 *  JobCard for every job in the list
 * 
 *  Props:  
 *  - jobList (array of jobs)
 * 
 *  State:
 *  - None
 * 
 *  { CompanyDetail, JobList } 
 *      -> JobCardList 
 *      -> JobCard
 */
function JobCardList({ jobList }) {
    console.log("JobCardList", {jobList});
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
export default JobCardList;