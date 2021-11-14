import { useContext, useEffect, useState } from "react";
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
    const { currentUser, hasAppliedToJob, handleApplyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState(false);

    useEffect(function updatedAppliedStatus() {
        setApplied(hasAppliedToJob(+id));
    }, [id, hasAppliedToJob])

    async function handleApply(evt) {
        console.log({id});
        if (hasAppliedToJob(id)) return;
        await handleApplyToJob(id);
        setApplied(true);
    }

    return (
        <div id={id} className="JobCard card mb-4">
            <h6 className="card-header text-uppercase">{title}</h6>
            <div className="card-body">
                <div className=""><small>Salary: {salary}</small></div>
                <div className="mb-3"><small>Equity: {equity}</small></div>
                {currentUser && <div>
                {!applied &&
                    <button className="btn btn-outline-success" 
                            onClick={handleApply}>
                        Apply
                    </button>}
                {applied && <button className="btn btn-success">Applied</button>}
                </div>}
            </div>
        </div>
    )
}

export default JobCard;