import { Link, Outlet } from "react-router-dom"
import PostContextProvider from "../context/postContext.jsx"

import './App.css'


function App() {


  return (
    <div>
      <Link to='/posts'>Go to posts</Link> <br />
      <PostContextProvider>
        <Outlet />
      </PostContextProvider>
    </div>
  )
}

export default App
