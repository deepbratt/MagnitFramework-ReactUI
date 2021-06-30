import axios from "axios";
import { useState,useEffect } from "react";

const useApi = () =>{
    const [data, setData] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [mounted, setIsMounted] = useState()
    const [error,setError] = useState({errorMessage: ""})
    const [review, setReview] = useState([])
    const [metaData, setMetaData] = useState([])
    const [banner, setBanner] = useState([])
    
      useEffect(() => {
    if(mounted && data){
      setIsMounted(mounted)
    }
  }, [mounted, data]);


    useEffect(() => {
      getData().then((res) => {
        setData(res.data.data.result)
        setReview(res.data.data.result.sections.reviews.dataArray)
        setBanner(res.data.data.result.sections.banner.dataArray)
        setMetaData(res.data.data.result.metaData)
      }).then(() => setLoading(false))
      .catch((error) => {
        setError({ errorMessage: error.status });
      });
      return () => {};
    }, []);
  
    const getData = async () => {
      let result = await axios.get("http://api.themagnit.com/v1/pages/bySlug/web-development")
      return result
   
    };
    return{data,loading,review,error,metaData,setLoading,banner}
}

export default useApi