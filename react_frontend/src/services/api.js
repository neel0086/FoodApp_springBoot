import axios from 'axios'
const url = "http://localhost:8080/api/v1"

const checkHeaders = () => {
    return localStorage.getItem("token");
}
class FoodService {
    addUser = async (user) => {
        try {
            return await axios.post(`${url}/auth/add_user`, user)
        }
        catch (error) {
            console.log("Error while calling addItems API", error);
        }
    }
    checkUser = async (user) => {
        try {
            return await axios.post(`${url}/auth/login`, user)
        }
        catch (error) {
            console.log("Error while calling addItems API", error);
        }
    }
    getAllItems = async () => {
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return await axios.get(`${url}/items`);
        } catch (error) {
            console.log('Error while calling getItems API ', error);
        }
    }
    addItems = async (item, id) => {
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return await axios.post(`${url}/items/${id}`, item)
        }
        catch (error) {
            console.log("Error while calling addItems API", error);
        }
    }
    addCompany = async (cmpny) => {
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return await axios.post(`${url}/company`, cmpny)
        }
        catch (error) {
            console.log("Error while calling addCompany API", error);
        }
    }
    getAllCompany = async () => {
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return (await axios.get(`${url}/company`)).data
        }
        catch (error) {
            console.log("Error while calling getAllCompany API", error);
        }
    }
    getAllVerifiedCompany = async () => {
        console.log(checkHeaders())
        try {
            const response = await axios.get(`${url}/company_verified`, {
                headers: { Authorization: "Bearer " + checkHeaders() }
            });
            return response.data;
        } catch (error) {
            console.log("Error while calling getAllCompany API", error);
        }
    }
    addVerifiedCompany = async (cmpny) => {
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return await axios.post(`${url}/company_verified`, cmpny)
        }
        catch (error) {
            console.log("Error while calling addCompany API", error);
        }
    }
    getAllAdminStats = async (date) => {
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return (await axios.post(`${url}/get_all_admin_stats`, { "date": date },
                {
                    headers: { Authorization: "Bearer " + checkHeaders() }
                }
            )).data
        }
        catch (error) {
            console.log("Error while calling getAllAdminStats API", error);
        }
    }
    getUserRole = async () =>{
        const headerToken = { headers: { Authorization: "Bearer " + checkHeaders() } }
        try {
            return (await axios.get(`${url}/auth/admin`,
                {
                    headers: { Authorization: "Bearer " + checkHeaders() }
                }
            )).data
        }
        catch (error) {
            return false
        }
    }
}
export default new FoodService()
