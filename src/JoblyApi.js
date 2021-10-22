import axios from "axios";
// import { decodeToken } from "react-jwt";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  // "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  // "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc"
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    console.log("res.companies: ", res.company);
    return res.company;
  }
  /** Get list of all companies or companies that meet search term criteria 
   * 
   *  searchTerm = {"name": "searchTerm"}
  */
  static async getCompanies(searchTerm) {
    const res = searchTerm.name !== ""
      ? await this.request(`companies/`, searchTerm)
      : await this.request(`companies/`)

    return res.companies;
  }

  /** Get list of all jobs or jobs that meet search term criteria 
   * 
   *  searchTerm = {"title": "searchTerm"}
  */
  static async getJobs(searchTerm) {
    const res = searchTerm.title !== ""
      ? await this.request(`jobs/`, searchTerm)
      : await this.request(`jobs/`)

    return res.jobs;
  }

  /** Logs an existing user in  
   *  
   *  formData = {username, password}
   *  returns: "token"
  */
  static async login({username, password}) {
    const res = await this.request('auth/token', {username,password}, "post");
    console.log("login response: ", res);
    return res.token;
  }

  /** Register a new user 
   *  
   *  formData = {username, firstName, lastName, email, password}
   *  returns: "token"
  */
  static async register(formData) {
    const res = await this.request('auth/register', formData, "post");
    console.log("register response: ", res);
    return res.token;
  }

  /** Gets a user's information 
   * 
   *  returns: 
   *  { username, firstName, lastName, isAdmin, jobs }
   *  
  */
  static async getUser(username) {
    const res = await this.request(`users/${username}`)
    console.log("getUser response", res);
    return res.user;
  }

    /** Authenticates user and then updates a user's information 
   *  
   *  returns: {
   *    user: { username, firstName, lastName, isAdmin, jobs },
   *    token: "token"
   *  }
  */
    static async updateUser(formData) {
      const { username, password, firstName, lastName, email } = formData
      await this.request('auth/token', {username,password}, "post");

      const userUpdateData = { firstName, lastName, email }
      const res = await this.request(`users/${username}`, userUpdateData, "patch")
      console.log("Update User response", res);
      return res.user;
    }  
}

export default JoblyApi;