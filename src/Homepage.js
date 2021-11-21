import "./Homepage.css";
import logo from "./images/logo.svg";
// import logo from "./images/logo.mp4";

import { useContext } from "react";
import UserContext from "./UserContext";

/** Component for homepage
 * 
 *  Props:
 *  - None
 * 
 *  State: 
 *  - None
 * 
 *  App -> Routes -> Homepage
 */
function Homepage() {
    const { currentUser } = useContext(UserContext);
    return (
        <div className="Homepage container text-center mt-5">
            <div className="jumbotron">
                <img src={logo} alt="jobly-logo" className="w-50 mb-1"></img>
                {/* <p className="lead">Find your dream job today.</p> */}
                {currentUser &&
                    <h2 className="Homepage-header">
                        Welcome {currentUser.firstName} {currentUser.lastName}!
                    </h2>
                }

            </div>
        </div>
    )
}
export default Homepage;