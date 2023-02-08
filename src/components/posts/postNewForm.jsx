import { useState, useContext } from "react"
import { PostContext } from "../../../context/postContext"



export default function PostNewForm() {
    const { submittingPost } = useContext(PostContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const handleForm = (e) => {
        e.preventDefault()
        submittingPost()
        setTitle('')
        setBody('')
        console.log("yes submited form")
    }

    return (
        <div className="postnewform">
            <form onSubmit={handleForm}>
                <label> ttile</label> <br />
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
                <label htmlFor=""> body</label>
                <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="submit">submit</button>
            </form>

        </div>
    )

}