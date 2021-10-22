/** Alerts for login and validation of input 
 * to profile and signup forms
 * 
 *  Props:
 *  - message (a successful message to show)
 * 
 *  State:
 *  - None
 * 
 *  { LoginForm, SignUpForm, ProfileForm } -> Alert
 */
 function Success({msg}) {
    return (
        <div>
            <h2 className="alert alert-success text-center m-5">{msg}</h2>
        </div>
    )
}

export default Success;