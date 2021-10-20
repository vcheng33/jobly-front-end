import React, { useState } from "react";

    /** Form for adding.
     *
     * Props:
     * - initialFormData
     * - handleSearch: function to call in parent.
     *
     * State:
     * - formData: {searchTerm}
     * 
     * This returns an HTML form for entering a search term.
     * 
     * { JobList, CompanyList } -> SearchForm
     */
    
    // have search remain in search bar.  Make sure search bar shows when no search results.
    const INITIAL_STATE = {
      searchTerm: "",
    }
    
    function SearchForm( { initalFormData=INITIAL_STATE, handleSearch } ) {
      const [formData, setFormData] = useState(initalFormData);
    
      /** Update form input. */
      function handleChange(evt) { 
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
      }
    
      /** Call parent function and clear form. */
      function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Check out state ->", formData);
        handleSearch(formData);
        // setFormData(INITIAL_STATE);
      }
    
      return (
          <form className="SearchForm" onSubmit={handleSubmit}>
    
            <div className="form-group">
              <input
                  id="searchTerm"
                  name="searchTerm"
                  className="form-control"
                  placeholder="Enter Search Term.."
                  onChange={handleChange}
                  value={formData.searchTerm}
                  aria-label="Enter Search Term"
              />
            </div>
    
              <button className="btn-primary rig btn btn-sm SearchForm-Btn">
                Search
              </button>
    
          </form>
      );
    }
    
    export default SearchForm;