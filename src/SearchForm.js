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

const INITIAL_STATE = {
  searchTerm: "",
}

function SearchForm({ initalFormData = INITIAL_STATE, handleSearch }) {
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
  }

  return (
    <form className="SearchForm m-3 mx-5" onSubmit={handleSubmit}>

      <div className="form-group row justify-content-evenly">
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

      <button className="btn-primary btn btn-sm SearchForm-Btn mt-2">
        Search
      </button>

    </form>
  );
}

export default SearchForm;