import { useEffect, useState } from "react"
import api from "../../Utils/Constants/api"

const useSeoPages = (endpoint) =>{
    const [isLoading, setIsLoading] = useState(false)
    const [metaData, setMetaData] = useState({title:"", description:"", keywords:"", canonical:""})

    const getPageData = () =>{
        setIsLoading(true)
        api.getData("pages/bySlug/"+endpoint).then(response=>{
            if(response && response.data && response.data.status==="success"){
                setMetaData(response.data.data.result.metaData)
            }else{
                console.log(response)
            }
        }).then(()=>setIsLoading(false))
    }

    useEffect(()=>{
        getPageData()
    },[])

    return {isLoading, metaData}
}

export default useSeoPages