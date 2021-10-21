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
    const currentUser = useContext(UserContext);
    return (
        <div className="Homepage container text-center mt-5">
            <h1 className="mb-4 fw-bold">Jobly</h1>
            <p className="lead">Find jobs in one convenient place.</p>
            {currentUser &&
                <h2>Welcome {currentUser.firstName} {currentUser.lastName}!</h2>
            }
        </div>
    )
}
export default Homepage;