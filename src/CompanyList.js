import { useState, useEffect } from "react";

import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

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
 * 
 *  Routes -> CompanyList -> CompanyCard
 * 
 */
function CompanyList() {
    const [companyList, setCompanyList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);

    useEffect(function fetchCompanyListOnLoad() {
        async function fetchCompanyList() {
            try {
                const companiesResult = await JoblyApi.getCompanies({"name": searchTerm});
                setCompanyList(companiesResult);
            } catch  (err) {
                setError(err);
            }
        }
        fetchCompanyList();
    }, [searchTerm]);

    
    function handleSearch(formData) {
        setSearchTerm(formData.searchTerm);
    }

    if (companyList === null && error === null) {
        return <h2>Loading...</h2>
    }

    if (companyList.length === 0) {
        return (
            <div>
                <SearchForm handleSearch={handleSearch}/>
                <h2>No Results Found</h2>
            </div>
        )
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <SearchForm handleSearch={handleSearch}/>
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
    )


}
export default CompanyList;