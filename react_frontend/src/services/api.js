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
    addItems = async (item)=>{
        try{
            return await axios.post(`${url}/items`,item)
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
}
export default new FoodService()
