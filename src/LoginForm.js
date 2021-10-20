import React, { useState } from "react";

/** Form for site signup.
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
    username: "",
    password: "",
}

function LoginForm({ initalFormData = INITIAL_STATE, handleSearch }) {
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
        <form className="LoginForm m-3 mx-5" onSubmit={handleSubmit}>

            <div className="form-group row justify-content-evenly">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="Enter Username"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.password}
                    aria-label="Enter Password"
                    required
                />
            </div>

            <button className="btn-primary btn btn-sm Submit-Btn mt-2">
                Submit
            </button>

        </form>
    );
}

export default LoginForm;