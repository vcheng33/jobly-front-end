import "./Homepage.css";
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
    return (
        <div className="Homepage container text-center mt-5">
            <h1 className="mb-4 fw-bold">Jobly</h1>
            <p className="lead">Find jobs in one convenient place.</p>
        </div>
    )
}
export default Homepage;