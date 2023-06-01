import axios from 'axios'
const url = "http://localhost:8080/api/v1/employees"

class EmployeeService{
    createEmployee = async(employee)=>{
        try {
            return await axios.post(`${url}`, employee);
        } catch (error) {
            console.log('Error while calling createEmployee API ', error);
        }
    }
    getEmployees = async ()=>{
        try{
            return await axios.get(`${url}`)
        }
        catch(error){
            console.log("Error while retriving the emplpoyees list",error);
        }
    }
    editEmployees = async (employee,id) =>{
        try{
            return axios.put(url+"/"+id,employee)
        }
        catch(error){
            console.log("Error ")
        }
    }
}
export default new EmployeeService()
