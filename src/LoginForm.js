import React, { useState } from "react";
import "./LoginForm.css";

import Alert from "./Alert";

/** Form for logging into the site.
 *
 * Props:
 * - initialFormData
 * - handleLogin: function to call in parent.
 *
 * State:
 * - formData: {username, password}
 * - error: [errorMessage if applicable]
 * 
 * Routes -> LoginForm -> Alert
 */

const INITIAL_STATE = {
    username: "",
    password: "",
}

function LoginForm({ initalFormData = INITIAL_STATE, handleLogin }) {
    const [formData, setFormData] = useState(initalFormData);
    const [error, setError] = useState(null);
    console.log("LoginForm, ", { initalFormData, handleLogin, formData });

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
            await handleLogin(formData);
        } catch (err) {
            console.log({err});
            setError(err);
        }
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