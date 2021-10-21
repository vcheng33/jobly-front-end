import React, { useState } from "react";
import "./ProfileForm.css";

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

function ProfileForm({ initalFormData = INITIAL_STATE, handleSearch }) {
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
        <form className="ProfileForm m-3 mx-5" onSubmit={handleSubmit}>

            <div className="form-group col-md-4 offset-md-4 justify-content-evenly mt-5">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="Enter Username"
                    disabled
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

                <label htmlFor="password">Confirm password to make changes:</label>
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
            <button className="btn-primary btn btn-sm ProfileForm-save-btn mt-2 mb-5 col-auto">
                Save Changes
            </button>
            </div>
        </form>
    );
}

export default ProfileForm;