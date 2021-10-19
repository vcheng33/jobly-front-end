import { Link } from "react-router-dom";

function CompanyCard({ handle, name, description, logo}) {
    console.log("CompanyCard:", {handle, name, description, logo})
    const linkURL = `/companies/${handle}`;

    return (
        <div>
            <Link exact to={linkURL}>
            <div>{name}</div>
            {logo !== null &&
            <img src={logo} alt="logo"></img>}
            <p>{description}</p>
            </Link>
        </div>
    )
}
export default CompanyCard;