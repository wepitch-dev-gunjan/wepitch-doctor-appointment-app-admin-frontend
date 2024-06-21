import axios from "axios";
import config from "../../../setup/config"
import { post } from "../../../common/apis/apiMethods";
import API_ENDPOINTS from "../../../common/apis/apiEndpoints";
const { backend_url } = config

export const login = async (email, password) => {
  try {
    const { data } = await post(`${API_ENDPOINTS}/login`, {
      email, password
    })
    return data;
  } catch (error) {
    console.log(error)
  }
}