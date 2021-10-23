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
    const linkURL = `/companies/${handle}`;

    return (
        <div className="CompanyCard card mb-3">
            <Link exact="true" to={linkURL}
                className="CompanyCard-card bg-white text-dark
                text-decoration-none">
                <h6 className="card-header text-uppercase">{name}</h6>
                <div className="card-body">
                    <div className="media">
                        <div className="media-body">
                            <div className="row">
                                    {logo !== null &&
                                        <img src={logo} alt="logo" className="col-2 justify-content-center align-self-center float-start" id="CompanyCard-img"></img>}
                                <div className="col-10">
                                    <div className="card-text ms-3 me-4">{description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default CompanyCard;