import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";

/** Component for a single company that shows details
 *  about that company
 * 
 *  Props: 
 *  - None
 * 
 *  State:
 *  - company
 *      { handle, name, description, numEmployees, logoUrl, jobs:
 *          [{ id, title, salary, equity }, ...]
 *      }
 * 
 *  Routes -> CompanyDetail -> JobCardList
 * 
 */
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
    // thought handle was misleading in the array since it's not a state

    if (company === null) {
        return <h2>Loading...</h2>
    }

    console.log("Company Detail", {company});
    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <JobCardList jobList={company.jobs}/>
        </div>
    )

}
export default CompanyDetail;