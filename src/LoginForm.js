import React, { useState } from "react";
import "./LoginForm.css";
import { Redirect } from "react-router-dom";
import Alert from "./Alert";

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

function LoginForm({ initalFormData = INITIAL_STATE, handleLogin, error }) {
    const [formData, setFormData] = useState(initalFormData);
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log("LoginForm, ", { initalFormData, handleLogin, error, formData, formSubmitted });


    // if current user is false, set formSubmitted to false
    // useEffect here on initial rendering

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
        handleLogin(formData);
        // setFormData(INITIAL_STATE);
        setFormSubmitted(true);
    }

    console.log("before if statement", {formSubmitted, error})
    if (formSubmitted && error === null) {
        console.log("inside if statement");
        return <Redirect push to="/" />
    }

    return (
        <div>
            {error && <Alert error={error} />}
            <form className="LoginForm row mt-3" onSubmit={handleSubmit}>

                <div className="form-group col-md-4 offset-md-4 justify-content-evenly mt-5">
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
                    <div className="row justify-content-evenly">
                        <button className="btn-primary btn btn-sm Submit-Btn mt-2 mb-5 col-auto">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;