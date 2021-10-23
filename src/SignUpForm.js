import React, { useState } from "react";
import "./SignUpForm.css";

import Alert from "./Alert";

/** Form for signing up a new user.
 *
 * Props:
 * - initialFormData
 * - handleSignUp: function to call in parent.
 *
 * State:
 * - formData: {username, firstName, lastName, email, password}
 * - error: [errorMessage if applicable]
 * 
 * Routes -> SignUpForm -> Alert
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
    console.log("SignUpForm, ", { initalFormData, handleSignUp, error, formData });

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
            await handleSignUp(formData);
        } catch (err) {
            setError(err);
        }
    }

    return (
        <div>
            {error && <Alert error={error} />}
            <form className="SignUpForm m-3 mx-5" onSubmit={handleSubmit}>

                <div className="form-group col-md-6 offset-md-3 justify-content-evenly mt-5">
                    <div className="mb-3">
                        <label htmlFor="username">USERNAME</label>
                        <input
                            id="username"
                            name="username"
                            className="form-control"
                            onChange={handleChange}
                            value={formData.username}
                            aria-label="Enter Username"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">PASSWORD</label>
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
                    <div className="mb-3">
                        <label htmlFor="firstName">FIRST NAME</label>
                        <input
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            onChange={handleChange}
                            value={formData.firstName}
                            aria-label="Enter First Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName">LAST NAME</label>
                        <input
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            onChange={handleChange}
                            value={formData.lastName}
                            aria-label="Enter Last Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">EMAIL</label>
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
                </div>
                <div className="row justify-content-evenly">
                    <button className="btn-secondary btn btn-sm SignUpForm-submit-btn mt-2 mb-5 col-auto">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;