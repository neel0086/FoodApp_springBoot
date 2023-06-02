import axios from 'axios'
const url = "http://localhost:8080/api/v1"

class FoodService{
    getAllItems = async()=>{
        try {
            return await axios.get(`${url}/items` );
        } catch (error) {
            console.log('Error while calling getItems API ', error);
        }
    }
    addItems = async (item,id)=>{
        try{
            return await axios.post(`${url}/items/${id}`,item)
        }
        catch(error){
            console.log("Error while calling addItems API",error);
        }
    }
    addCompany = async (cmpny)=>{
        try{
            return await axios.post(`${url}/company`,cmpny)
        }
        catch(error){
            console.log("Error while calling addCompany API",error);
        }
    }
    getAllCompany = async ()=>{
        try{
            return (await axios.get(`${url}/company`)).data
        }
        catch(error){
            console.log("Error while calling getAllCompany API",error);
        }
    }
    addVerifiedCompany = async (cmpny)=>{
        try{
            return await axios.post(`${url}/company_verified`,cmpny)
        }
        catch(error){
            console.log("Error while calling addCompany API",error);
        }
    }
}
export default new FoodService()
