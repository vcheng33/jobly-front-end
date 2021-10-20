import { Link } from "react-router-dom";

/** Component for a single company
 * 
 *  Props:
 *  - handle, name, description, logo
 * 
 *  State: 
 *  - None
 * 
 *  CompanyList -> CompanyCard
 *
 */
function CompanyCard({ handle, name, description, logo }) {
    console.log("CompanyCard:", { handle, name, description, logo })
    const linkURL = `/companies/${handle}`;

    return (
        <div className="CompanyCard card mx-5">
            <Link exact to={linkURL} className="CompanyCard-card bg-white mb-3">
                {logo !== null &&
                    <img src={logo} alt="logo" class="CompanyCard-logo"></img>}
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{description}</p>
            </Link>
        </div>
    )
}
export default CompanyCard;