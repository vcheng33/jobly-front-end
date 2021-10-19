function JobCard({ id, title, salary, equity }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
        </div>
    )
}
export default JobCard;