/** Component that shows a loading message 
 * 
 *  Props:
 *  - None
 * 
 *  State: 
 *  - None
 * 
 *  { CompanyList, CompanyDetail, JobList } -> Loading
 */

function Loading () {
    return (
        <div className="jumbotron">
            <div className="Loading d-flex align-items-center justify-content-center">
                <h2>Loading...</h2>
            </div>
        </div>
    )
}

export default Loading;