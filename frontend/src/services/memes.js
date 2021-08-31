import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/memes'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`http://localhost:3003/api/memes/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = axios.delete(`http://localhost:3003/api/memes/${id}`,config)
  return request.then(response => response.data)
}

const vote = async (meme) => {
  console.log('memeservice receives the post titled: ' , meme.title , 'And attempts to increase its votes by one.')
  const votedMeme = {
    ...meme,
    likes: meme.likes + 1
  }
  console.log('Meme after the vote: ' , votedMeme)
  const response = await axios.put(`${baseUrl}/${meme.id}`, votedMeme)
  return response.data
}

const addComment = async (meme, comment) => {
  const response = await axios.post(`${baseUrl}/${meme.id}/comments`,comment)
  return response.data
}

export default { getAll, create, update, setToken, remove, vote, addComment }