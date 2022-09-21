import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export default async function handler(req, res) {
  try {
    const { id } = req.query
    const { data } = await axios.get(`${BASE_URL}/project/${id}`)
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
  }
}