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
            await handleLogin(formData);
        } catch (err) {
            setError(err);
        }
    }

    return (
        <div>
            {error && <Alert error={error} />}
            <form className="LoginForm row mt-3" onSubmit={handleSubmit}>

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
                    <div className="row justify-content-evenly">
                        <button className="btn-secondary btn-sm Submit-Btn mt-2 mb-5 col-auto">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;