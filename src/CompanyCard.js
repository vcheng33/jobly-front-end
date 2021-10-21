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
        <div className="CompanyCard card mb-4">
            <Link exact to={linkURL}
                className="CompanyCard-card bg-white text-dark
                text-decoration-none">
                <h6 className="card-header text-uppercase">{name}</h6>
                <div className="card-body">
                    {logo !== null &&
                        <img src={logo} alt="logo" class="col-1 float-start m-2"></img>}
                    <div className="card-text mx-5">{description}</div>
                </div>
            </Link>
        </div>
    )
}
export default CompanyCard;