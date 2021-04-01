import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/Reducers/rootReducer'

const middleware = [thunk]

const enhancers = []

const isDevelopment = true
if(isDevelopment){
    window.devToolsExtension
}else{
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(): f => f)
}

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
    )
)

export default store