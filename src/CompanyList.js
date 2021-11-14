import { useState, useEffect } from "react";

import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

/** Component for showing a list of all Companies
 *  in the database
 * 
 *  Props: 
 *  - None
 * 
 *  State:
 *  - companyList 
 *      { companies: 
 *          [ { handle, name, description, numEmployees, logoUrl }, ...] 
 *      }
 *  - searchTerm from searchForm
 *  - error: [errorMessage if applicable]
 * 
 *  ProtectedRoutes -> CompanyList -> { CompanyCard, Loading }
 * 
 */
function CompanyList() {
    const [companyList, setCompanyList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);

    useEffect(function fetchCompanyListOnLoad() {
        async function fetchCompanyList() {
            try {
                const companiesResult = await JoblyApi.getCompanies({ "name": searchTerm });
                setCompanyList(companiesResult);
            } catch (err) {
                setError(err);
            }
        }
        fetchCompanyList();
    }, [searchTerm]);


    function handleSearch(formData) {
        setSearchTerm(formData.searchTerm);
    }

    if (companyList === null && error === null) {
        return <Loading />
    }

    if (companyList.length === 0) {
        return (
            <div>
                <div className="CompanyCard col-md-8 offset-md-2 text-center mb-4">
                    <SearchForm handleSearch={handleSearch} />
                    <h2>No Results Found</h2>
                </div>
            </div>
        )
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="CompanyList mt-2">
            <div className="CompanyCard col-md-8 offset-md-2 pt-2">
                <SearchForm handleSearch={handleSearch} />
                {companyList.map(c => (
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logo={c.logoUrl}
                    />
                ))}
            </div>
        </div>
    )


}
export default CompanyList;