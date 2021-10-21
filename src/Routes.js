import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";

/** Routes for App 
 * 
 *  Props:
 *  - handleLogin: function from parent
 * 
 *  State: 
 *  - None
 * 
 *  App -> Routes 
 *     -> { Homepage, CompanyList, CompanyDetail, JobList}
*/
function Routes({ handleLogin, handleSignUp }) {
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
            <LoginForm handleLogin={handleLogin}/>
        </Route>
        <Route exact path="/signup">
            <SignUpForm handleSignUp={handleSignUp}/>
        </Route>
        <Route exact path="/profile">
            <ProfileForm />
        </Route>
        <Route exact path="/">
            <Homepage />
        </Route>
        <Redirect to="/" />
    </Switch>
    )
}
export default Routes;