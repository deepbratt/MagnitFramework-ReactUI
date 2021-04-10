import Switch from "./Switch"
import themeReducer from "../../Redux/Reducers/themeReducer"
import TOGGLE_DARKTHEME from "../../Redux/Actions/themeActions/action.constants"
import { checkPropTypes } from 'prop-types';


describe("Checking Proptype", () =>{
    it("Switch should return func without crashing", ()=>{
       const expectedProp = {
           emitEvent: () =>{

           }
       }
       const propError = checkPropTypes(Switch.propTypes, expectedProp, "props", Switch.name)
       expect(propError).toBeUndefined()
    })
})

describe("State Reducer", ()=>{
    it("Should return default state", () =>{
        const theme = {
            lightThemeEnabled: "LIGHT"
        }
        const newState = themeReducer(theme, {})
        expect(newState).toEqual(theme)
    })
})


describe("State Reducer", ()=>{
    it("Should return changed state", () =>{
        const theme = {
            lightThemeEnabled: "DARK"
        }
        const newState = themeReducer({lightThemeEnabled: "LIGHT"}, {
            type: TOGGLE_DARKTHEME,
            payload: theme.lightThemeEnabled
        })
        expect(newState).toEqual(theme)
    })
})



