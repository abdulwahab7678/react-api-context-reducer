import { useReducer, createContext, useEffect } from "react";
import { getAllPosts } from "../api/post";

export const PostContext = createContext()


function postReducer(state, action) {
    if (action.type === 'FATCHING') {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === 'FATCHED') {
        return {
            ...state,
            loading: false,
            data: [...action.data]
        }
    }
    if (action.type === 'SUBMITTING') {
        return { ...state, isSubmitting: true }
    }
    if (action.type === 'SUBMITTED') {
        return {
            ...state,
            isSubmitting: false,
            data: [{ ...action.post }, ...state.data]
        }
    }
    if (action.type === 'UPDATING') {
        return {
            ...state,
            loading: true
        }
    }
    if (action.type === 'UPDATED') {
        return {
            ...state,
            loading: false,
            data: [{ ...action.update }, ...state.data]
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


export default function PostContextProvider({ children }) {
    const [state, dispatch] = useReducer(postReducer, initialState)

    useEffect(() => {
        const fetchingPost = async () => {
            dispatch({ type: 'FATCHING' })
            const data = await getAllPosts()
            dispatch({ type: 'FATCHED', data: [...data] })
        }
        fetchingPost()

    }, [])

    const submittingPost = () => {
        dispatch({ type: 'SUBMITING' })
    }
    const submittedPost = (post) => {
        dispatch({ type: 'SUBMITTED', post: post })
    }
    const updatingPost = () => {
        dispatch({ type: 'UPDATING' })
    }
    const updatedPost = (update) => {
        dispatch({ type: 'UPDATED', update: update})
    }





    return (
        <PostContext.Provider value={{ ...state, submittingPost, submittedPost , updatingPost ,updatedPost }}>
            {children}
        </PostContext.Provider>
    )
}