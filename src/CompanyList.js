import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";

import CompanyCard from "./CompanyCard";

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
 * 
 *  Routes -> CompanyList -> CompanyCard
 * 
 */
function CompanyList() {
    // useEffect on load
    const [companyList, setCompanyList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(function fetchCompanyListOnLoad() {
        async function fetchCompanyList() {
            const companiesResult = await JoblyApi.getCompanies({"name": searchTerm});
            setCompanyList(companiesResult);
        }
        fetchCompanyList();
    }, [searchTerm]);

    
    function handleSearch(formData) {
        setSearchTerm(formData.searchTerm);
    }

    if (companyList === null) {
        return <h2>Loading...</h2>
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