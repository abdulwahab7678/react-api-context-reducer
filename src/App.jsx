import { Link, Outlet } from "react-router-dom"
import PostContextProvider from "../context/postContext.jsx"
import { useRef } from "react"
import PostNewForm from "./components/posts/postNewForm.jsx"

import './App.css'


function App() {
  const formRef = useRef(null)
  
  const getPostForm = ()=>{
    formRef.current.classList.add("showForm")
  }

  return (
    <div>
      <Link to='/posts'>Go to posts</Link> <br />
      <button onClick={getPostForm}>new form</button>
      <div ref={formRef} className="newform">
        <PostNewForm />
      </div>
      <PostContextProvider>
        <Outlet />
      </PostContextProvider>
    </div>
  )
}

export default App
