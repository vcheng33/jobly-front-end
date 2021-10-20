import { Route, Switch, Redirect } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Homepage from "./Homepage";

/** Routes for App 
 * 
 *  Props:
 *  - None
 * 
 *  State: 
 *  - None
 * 
 *  App -> Routes 
 *     -> { Homepage, CompanyList, CompanyDetail, JobList}
*/
function Routes() {
    return(
    <Switch>
        <Route exact path="/companies">
            <CompanyList />
        </Route>
        <Route exact path="/companies/:handle">
            <CompanyDetail />
        </Route>
        <Route exact path="/jobs">
            <JobList />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/signup">
            <SignUp />
        </Route>
        <Route exact path="/profile">
            <Profile />
        </Route>
        <Route exact path="/">
            <Homepage />
        </Route>
        <Redirect to="/" />
    </Switch>
    )
}
export default Routes;