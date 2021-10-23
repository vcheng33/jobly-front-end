import { useContext } from "react";
import UserContext from "./UserContext";

/** Component to show a single job card
 * 
 *  Props: 
 *  - { id, title, salary, equity }
 * 
 *  State: 
 *  - None
 * 
 *  JobCardList -> JobCard
*/

function JobCard({ id, title, salary, equity }) {
    const { hasAppliedToJob, handleApplyToJob } = useContext(UserContext);
    const jobApplied = hasAppliedToJob(id);

    return (
        <div id={id} className="JobCard card mb-4">
            <h6 className="card-header text-uppercase">{title}</h6>
            <div className="card-body">
                <div className="mt-3"><small>Salary: {salary}</small></div>
                <div><small>Equity: {equity}</small></div>
                {!jobApplied &&
                    <button className="btn btn-outline-success" onClick={handleApplyToJob}>
                        Apply
                    </button>}
                {jobApplied && <button className="btn btn-success">Applied</button>}
            </div>
        </div>
    )
}

export default JobCard;