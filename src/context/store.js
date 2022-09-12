import {createContext} from 'react'

export const initialState = {
    user:{},
    postings:[],
    locales:[],
    basket: []
}

export default Context = createContext(initialState);