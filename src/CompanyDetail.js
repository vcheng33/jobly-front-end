import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";

function CompanyDetail() {
    const { handle } = useParams();
    const [ company, setCompany ] = useState(null);

    useEffect(function fetchCompanyOnLoad() {
        async function fetchCompany() {
            const companyResult = await JoblyApi.getCompany(handle);
            setCompany(companyResult);
        }
        fetchCompany();
    }, []);
    // add handle inside array if it's needed

    if (company === null) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            {company.jobs.map(j => (
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
export default CompanyDetail;