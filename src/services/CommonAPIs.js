import axios from "axios";

// configuer axios

export const CommonAPIs=async(httpMethod,url,reqBody)=>{
    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody
    }
    return await axios(reqBody).then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}