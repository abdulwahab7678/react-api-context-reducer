import { useContext, useState } from "react"
import { PostContext } from "../../../context/postContext"
import PostNewForm from "../../components/posts/postNewForm"
import { useRef } from "react"
import { API_URL } from "../../config/api"
// import { updatePost } from "../../../api/post"
// import {deleteData} from '../../../api/post'


export default function PostIndex() {
    const formRef = useRef(null)
    const [post, setPost] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const getPostForm = () => {
        formRef.current.classList.add("showForm")
    }

    function edit(post){
         setPost(post)
         setShowForm(true)
        //  const userform = <PostNewForm props={{title:title}}/>
        //  console.log(userform.props)
        //  const x = userform.props

    }

    function deletePost(id) {
        alert(`${id} id deleted`)
        fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE',
        });
    }

    const { data, loading, error } = useContext(PostContext)

    if (error) {
        return (
            <h5>{error}</h5>
        )
    }
    if (loading) {
        return (
            <h5>loading posts....</h5>
        )
    }
    if (data) {
        return (
            <div>

                <button onClick={(e) => setShowForm(!showForm)}>{showForm ? "Hide" : "Show"} Form</button>
                {showForm && (
                    <div>
                        <PostNewForm showForm={showForm} setShowForm={setShowForm} data={post} />
                    </div>
                )}
                {data.map(post => (
                    <div className="posts">
                        <h2>{post.id}</h2>
                        <h2>{post.title}</h2>
                        <h3>{post.body}</h3>
                        <button onClick={(e)=> edit(post)}>edit </button>
                        <button onClick={() => deletePost(post.id)} id={post.id}>delete </button>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>

        </div>
    )
}

