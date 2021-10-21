/** Component to show a single job card
 * 
 *  Props: 
 *  - id, title, salary, equity
 * 
 *  State: 
 *  - None
 * 
 *  JobCardList -> JobCard
*/

function JobCard({ id, title, company, salary, equity }) {
    console.log("JobCard", { id, title, salary, equity })
    return (
        <div id={id} className="JobCard card mb-4">
            <h6 className="card-header text-uppercase">{title}</h6>
            <div className="card-body">
                <p>{company}</p>
                <div><small>Salary: {salary}</small></div>
                <div><small>Equity: {equity}</small></div>
            </div>
        </div>
    )
}

export default JobCard;