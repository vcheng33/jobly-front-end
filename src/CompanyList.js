import { useState, useEffect } from "react";

import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

import "./CompanyList.css";

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
    console.log("CompanyList rendered");
    const [companyList, setCompanyList] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    
    // debugger;
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
        return <h2>Loading...</h2>
    }

    if (companyList.length === 0) {
        return (
            <div>
                <div className="CompanyCard col-md-8 offset-md-2 text-center">
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
        <div className="CompanyList">
            <div className="CompanyCard col-md-8 offset-md-2">
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