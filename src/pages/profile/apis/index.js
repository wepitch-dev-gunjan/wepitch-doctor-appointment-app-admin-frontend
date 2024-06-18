import axios from "axios";
import config from "../../../setup/config"
const { backend_url } = config

export const getProfile = async () => {
  const { data } = await axios.get(`${backend_url}/admin/profile`);
  return data;
}
