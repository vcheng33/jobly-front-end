import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

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
 *  - handleLogin: function to be called in parent
 *  - handleSignUp: function to be called in parent
 * 
 *  State: 
 *  - None
 * 
 *  App -> Routes 
 *     -> { Homepage, 
 *          CompanyList, 
 *          CompanyDetail, 
 *          JobList,
 *          LoginForm,
 *          SignUpForm,
 *          ProfileForm,
 *          }
*/
function Routes({ handleLogin, handleSignUp }) {
    const user = useContext(UserContext);
    return (
        <div>
            <Switch>
                {user &&
                    <Route exact path="/companies">
                        <CompanyList />
                    </Route>
                }
                {user &&
                    <Route exact path="/companies/:handle">
                        <CompanyDetail />
                    </Route>
                }
                {user &&
                    <Route exact path="/jobs">
                        <JobList />
                    </Route>
                }
                {user &&
                    <Route exact path="/profile">
                        <ProfileForm />
                    </Route>
                }
                {!user &&
                    <Route exact path="/login">
                        <LoginForm handleLogin={handleLogin} />
                    </Route>
                }
                {!user &&
                    <Route exact path="/signup">
                        <SignUpForm handleSignUp={handleSignUp} />
                    </Route>
                }
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
export default Routes;