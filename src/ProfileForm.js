import React, { useState, useContext } from "react";
import "./ProfileForm.css";
import UserContext from "./UserContext";
import Alert from "./Alert";
import Success from "./Success";

/** Form for updating a user's profile.
 *
 * Props:
 * - initialFormData
 * - handleProfileUpdate: function to call in parent.
 *
 * State:
 * - success: true/false
 * - error: [errorMessage if applicable]
 * - formData: {
 *      username (cannot be updated), 
 *      password (for validation), 
 *      firstName, 
 *      lastName, 
 *      email}
 * 
 * ProtectedRoutes -> ProfileForm -> Alert
 */


function ProfileForm({ handleProfileUpdate }) {
    const user = useContext(UserContext);
    const userData = {
        username: user.username,
        password: "",
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    }
    const [formData, setFormData] = useState(userData);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

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
            await handleProfileUpdate(formData);
            setSuccess(true);
        } catch (err) {
            setError(err)
        }
    }

    return (
        <div>
            {error && <Alert error={error} />}
            {success && <Success msg="User successfully updated" />}
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
        </div>
    );
}

export default ProfileForm;