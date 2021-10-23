import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";
import ProtectedRoute from "./ProtectedRoute";

/** Routes for App 
 * 
 *  Props:
 *  - handleLogin: function to be called in parent
 *  - handleSignUp: function to be called in parent
 *  - handleProfileUpdate: function to be called in parent
 * 
 *  State: 
 *  - None
 * 
 *  App -> Routes  
 *   -> ProtectedRoute -> { CompanyList, CompanyDetail, JobList, ProfileForm, handleApplyToJob } 
 *   -> { Homepage, LoginForm, SignUpForm }
*/
function Routes({ handleLogin, handleSignUp, handleProfileUpdate }) {
    return (
        <Switch>
            <ProtectedRoute exact path="/companies">
                <CompanyList />
            </ProtectedRoute>
            <ProtectedRoute exact path="/companies/:handle">
                <CompanyDetail />
            </ProtectedRoute>
            <ProtectedRoute exact path="/jobs">
                <JobList />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile">
                <ProfileForm handleProfileUpdate={handleProfileUpdate}/>
            </ProtectedRoute>
            <Route exact path="/login">
                <LoginForm handleLogin={handleLogin} />
            </Route>
            <Route exact path="/signup">
                <SignUpForm handleSignUp={handleSignUp} />
            </Route>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
export default Routes;