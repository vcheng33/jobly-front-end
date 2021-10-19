import { Route, Switch } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Homepage from "./Homepage";

/** Routes for App */
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
        <Route exact path="/">
            <Homepage />
        </Route>
    </Switch>
    )
}
export default Routes;