import axios from "axios";
import config from "../../../setup/config"
const { backend_url } = config

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${backend_url}/admin/login`, {
      email, password
    })
    return data;
  } catch (error) {
    console.log(error)
  }
}