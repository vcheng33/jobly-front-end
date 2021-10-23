import "./Homepage.css";
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
    const { user } = useContext(UserContext);
    return (
        <div className="Homepage container text-center mt-5">
            <div className="jumbotron">
            <h1 className="Homepage-header mb-4 fw-bold display-1">Jobly</h1>
            <p className="lead">Find jobs in one convenient place.</p>
            {user &&
                <h2>Welcome {user.firstName} {user.lastName}!</h2>
            }
            </div>
        </div>
    )
}
export default Homepage;