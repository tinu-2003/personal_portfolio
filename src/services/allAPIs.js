import { CommonAPIs } from "./CommonAPIs"
import { ServerURL } from "./ServerURL"

export const addprojectsAPI = async(reqBody)=>{
    return await CommonAPIs('POST', `${ServerURL}/project`,reqBody)
}