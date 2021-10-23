import { useContext } from "react";
import UserContext from "./UserContext";
import { Route, Redirect } from "react-router-dom";

/** Route that requires user to be logged in 
 * 
 *  Props:
 *  - path: for where to direct Route
 *  - exact: for exact path or not
 *  - ...props: for any other props
 * 
 *  State: 
 *  - None
 * 
 * Routes -> ProtectedRoute 
 *        -> { CompanyList, CompanyDetail, JobList, ProfileForm } 
 *   
*/
function ProtectedRoute(props) {
    const { currentUser } = useContext(UserContext);
    if (!currentUser) return <Redirect to="/"/>
    return (
        <Route path={props.path} exact={props.exact} {...props}>
            {props.children}
        </Route>
    )
}

export default ProtectedRoute;