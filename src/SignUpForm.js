import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./SignUpForm.css";
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
    firstName: "",
    lastName: "",
    email: "",

}

function SignUpForm({ initalFormData = INITIAL_STATE, handleSignUp }) {
    const [formData, setFormData] = useState(initalFormData);
    const [error, setError] = useState(null);
    console.log("SignUpForm, ", {initalFormData, handleSignUp, error, formData });
    
    // if there's no current user, reset initialFormData to empty on initial render (create useEffect)

    /** Update form input. */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** Call parent function and clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
        console.log("Check out state ->", formData);
        console.log("inside try of handleSubmit")
        await handleSignUp(formData);
        } catch (err) {
            console.log("error", err);
            setError(err);
        }
    }

    return (
        <div>
            {error && <Alert error={error} />}
            <form className="SignUpForm m-3 mx-5" onSubmit={handleSubmit}>

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

                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.firstName}
                        aria-label="Enter First Name"
                        required
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.lastName}
                        aria-label="Enter Last Name"
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.email}
                        aria-label="Enter Email"
                        required
                    />
                </div>
                <div className="row justify-content-evenly">
                    <button className="btn-primary btn btn-sm SignUpForm-submit-btn mt-2 mb-5 col-auto">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;