import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import Loading from "./Loading";


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
 *  - error 
 *      [errorMessage if applicable]
 * 
 *  ProtectedRoutes -> CompanyDetail -> { JobCardList, Loading }
 * 
 */
function CompanyDetail() {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);
    const [error, setError] = useState(null);

    useEffect(function fetchCompanyOnLoad() {
        async function fetchCompany() {
            try {
                const companyResult = await JoblyApi.getCompany(handle);
                setCompany(companyResult);
            } catch (err) {
                setError(err);
            }
        }
        fetchCompany();
    }, [handle]);

    if (company === null && error === null) {
        return <Loading />
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="CompanyDetail col-md-8 offset-md-2 text-center">
            <h2 className="mt-3">{company.name}</h2>
            <p>{company.description}</p>
            <JobCardList jobList={company.jobs} />
        </div>
    )
}
export default CompanyDetail;