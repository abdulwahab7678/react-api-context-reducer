import { useContext } from "react"
import { postContext } from "../../../context/postContext"

export default function PostIndex(){
 const { data , loading , error } = useContext(postContext) 

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
                <div>
                    <h2>{post.id}</h2>
                    <h2>{post.title}</h2>
                   <h2>{post.author}</h2>
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

