/** Alerts for login and validation of input 
 * to profile and signup forms
 * 
 *  Props:
 *  - None
 * 
 *  State:
 *  - token
 *  - currentUser
 * 
 *  App -> { Navigation, Routes }
 */
function Alert({ error }) {
    return (
        <div>
            <h2 className="alert alert-danger text-center m-5">{error}</h2>
        </div>
    )
}

export default Alert;