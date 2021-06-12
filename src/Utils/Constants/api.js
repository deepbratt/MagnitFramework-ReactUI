import axios from 'axios'
const BASE_URL = "http://3.138.190.235/v1/"
const axiosInstance = axios.create({
    baseURL:BASE_URL,
    headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
       "Access-Control-Allow-Origin": "*"
    }
})

const api = {
    requestQuote: async function(requestBody, createNewToken, isCancel){
        try{
            const response = await axiosInstance.post("Quote/createQuote", requestBody, {cancelToken:createNewToken})
            return response
        }catch(error){
            if (isCancel(error)) {
                console.log(`request cancelled:${error.message}`);
            }
            console.log('error: ',error)
            return error
        }
    },
    getAllQuote: async function(createNewToken, isCancel){
        try{
            const response = await axiosInstance.get("quote/allquote", {cancelToken:createNewToken})
            console.log(response)
            return response
        }catch(error){
            if (isCancel(error)) {
                console.log(`request cancelled:${error.message}`);
            }
            console.log('error: ',error)
            return error
        }
        // fetch(BASE_URL+"quote/allquote").then((response)=>{
        //     return response.json()
        // }).catch(error=>{
        //     console.log('error: ',error)
        //         return error
        // })

        // let response = () => {
        //     return new Promise(function(resolve, reject) {
        //       fetch("http://3.14.6.42/api/v1/quote/allquote").then(response => {
        //         resolve(response);
        //       });
        //     });
        //   };
        //   let responseData = await response();
        //   console.log(responseData);
    }
}

export default api