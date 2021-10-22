import { useContext } from "react";
import UserContext from "./UserContext";
import { Route } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

function ProtectedRoute() {
    const userLoggedIn = useContext(UserContext);

    return (
        <div>
            {userLoggedIn && 
            <div>
                <Route exact path="/companies">
                    <CompanyList />
                </Route>
                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>
                <Route exact path="/jobs">
                    <JobList />
                </Route>
            </div>}
        </div>
    )
}

export default ProtectedRoute;