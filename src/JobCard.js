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
function JobCard({ id, title, salary, equity }) {
    return (
        <div id={id}>
            <h2>{title}</h2>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
        </div>
    )
}
export default JobCard;