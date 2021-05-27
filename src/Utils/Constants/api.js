import axios from 'axios'
const DOMAIN_NAME = 'http://3.14.6.42/'
const DOMAIN_POSTFIX = 'api/v1/'
const BASE_URL = DOMAIN_NAME+DOMAIN_POSTFIX
const axiosInstance = axios.create({
    baseURL:BASE_URL,
    headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
       "Access-Control-Allow-Origin": "*"
    }
})

const api = {
    requestQuote: async function(body, source){
        try{
            const response = await axiosInstance.get("quote/allquote", {cancelToken:source.token})
            console.log(response)
            return response
        }catch(error){
            if (axios.isCancel(error)) {
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