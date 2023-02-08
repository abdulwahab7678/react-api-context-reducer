import { useContext } from "react"
import { PostContext } from "../../../context/postContext"

export default function PostIndex(){
 const { data , loading , error } = useContext(PostContext) 

 if(error) {
    return(
        <h5>{error}</h5>
    )
 }
 if(loading){
    return(
        <h5>loading posts....</h5>
    )
 }
 if(data){
    return(
        <div>
            {data.map(post =>(
                <div className="posts">
                    <h2>{post.id}</h2>
                    <h2>{post.title}</h2>
                   <h3>{post.body}</h3>
                </div>
            ))}
        </div>
    )
 }

return(
    <div>
    
</div>
)
}

