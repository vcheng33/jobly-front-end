/** Alerts for login and validation of input 
 * to profile and signup forms
 * 
 *  Props:
 *  - error (an error message)
 * 
 *  State:
 *  - None
 * 
 *  { LoginForm, SignUpForm, ProfileForm } -> Alert
 */
function Alert({ error }) {
    return (
        <div>
            <h2 className="alert alert-danger text-center m-5">{error}</h2>
        </div>
    )
}

export default Alert;