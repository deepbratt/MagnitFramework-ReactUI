import { StairCaseData } from "../../../Utils/Constants/Language/en/AppSolutionsData";


const useLoop = () =>{
    const color = StairCaseData.map((data)=>{
        return (
            data.color 
        )
    })

    const margin = StairCaseData.map((data)=>{
        return (
            data.margin
        )
    })

    return{color,margin}
}


export default useLoop