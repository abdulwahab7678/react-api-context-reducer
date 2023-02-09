import { useState, useContext, useRef } from "react"
import { PostContext } from "../../../context/postContext"
import { createPost } from "../../../api/post"



export default function PostNewForm() {
    const { isSubmitting, submittingPost, submittedPost } = useContext(PostContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const formRef = useRef(null)
    const dontShowForm = () => {
        formRef.current.parentNode.classList.remove('showForm')
    }

    const handleForm = (e) => {
            e.preventDefault()
            submittingPost()
            setTimeout(async () => {
                let data = await createPost({ title, body })
                submittedPost({ ...data })
                setTitle('')
                setBody('')
                dontShowForm()
            }, 3000)

        }

        return (
            <div ref={formRef} className="postnewform">
                <form onSubmit={handleForm}>
                    <label> title</label> <br />
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
                    <label htmlFor=""> body</label><br />
                    <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea><br />
                    <button type="submit" disabled={isSubmitting}>submit</button>
                </form>

            </div>
        )

    }