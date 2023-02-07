import { useReducer, createContext, useEffect } from "react";
import { getAllPosts } from "../api/post";

export const postContext = createContext()


function postReducer(state, action) {
    if(action.type === 'FATCHING'){
        return{
            ...state  ,
            loading : true  
        }
    }
    if(action.type === 'FATCHED'){
        return{
            ...state,
            loading : false,
            data : [...action.data]
        }
    }

    return {
        ...state
    }
}
const initialState = {
    error: null,
    loading: false,
    idle: false,
    isSubmitting: false,
    data: null
}


export default function postContextProvider({ children }) {
    const [state, despatch] = useReducer(postReducer, initialState)

    useEffect(() => {
        const fetchingPost = async () => {
          despatch({ type: 'FATCHING' })
          const data = await getAllPosts() 
          despatch({type : 'FATCHED', data: [...data]})
        }
        fetchingPost()

    }, [])


    return (
        <postContext.Provider value={{ ...state }}>
            {children}
        </postContext.Provider>
    )
}