import { API_URL } from "../src/config/api";
const resource = '/posts'
// const id = `/posts/${id}`


export const createPost = async (post) => {
    const { title, body, userId = 1 } = post

    return fetch(`${API_URL}${resource}`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(data => data);
}


export const getAllPosts = async () => {
    return fetch(`${API_URL}${resource}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw new Error("error")
                .then(data => data)
                .catch(error => error.massage)
        })
} 
 
// export const deleteData = async (id)=>{
//   return fetch(`${API_URL}${resource}${id}`, {
//   method: 'DELETE',
// });
// } 

export const updatePost = async (post)=>{
const {title, body, id} = post
    return fetch(`${API_URL}${resource}${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    id,
    title,
    body
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(data => data);
}
