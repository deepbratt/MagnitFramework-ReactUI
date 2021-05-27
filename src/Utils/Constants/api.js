import axios from 'axios'
const DOMAIN_NAME = 'http://3.14.6.42/'
const DOMAIN_POSTFIX = 'api/v1/'
const BASE_URL = DOMAIN_NAME+DOMAIN_POSTFIX

const api = {
    requestQuote: async (body)=>{
        try{
            const submitQuote = await axios.get(BASE_URL+"quote/allquote")
            return submitQuote
        }catch(error){
            console.log('error: ',error)
            return error
        }
    }
}

export default api