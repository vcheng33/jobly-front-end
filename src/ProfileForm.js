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
    const { currentUser } = useContext(UserContext);
    const userData = {
        username: currentUser.username,
        password: "",
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
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
                        disabled
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
                    <div className="mb-3">
                    <label htmlFor="password">CONFIRM PASSWORD TO MAKE CHANGES:</label>
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
                </div>
                <div className="row justify-content-evenly">
                    <button className="btn-secondary btn btn-sm ProfileForm-save-btn mt-2 mb-5 col-auto">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProfileForm;