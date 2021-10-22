import { useContext } from "react";
import UserContext from "./UserContext";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
    const userLoggedIn = useContext(UserContext);
    if (!userLoggedIn) return <Redirect to="/"/>
    return (
        <Route path={props.path} exact={props.exact} {...props}>
            {props.children}
        </Route>
    )
}

export default ProtectedRoute;