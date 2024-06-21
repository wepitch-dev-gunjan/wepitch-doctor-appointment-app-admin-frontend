import API_ENDPOINTS from "../../../common/apis/apiEndpoints"
import { del, get, post, put } from "../../../common/apis/apiMethods"

export const createProfile = async (adminData) => {
  try {
    return await post(API_ENDPOINTS.ADMINS, adminData)
  } catch (error) {
    throw new Error("Failed to create profile")
  }
}

export const fetchProfile = async (adminId) => {
  try {
    return await get(`${API_ENDPOINTS.ADMINS}/${adminId}`)
  } catch (error) {
    throw new Error("Failed to get profile")
  }
}

export const updateProfile = async (adminId) => {
  try {
    return await put(`${API_ENDPOINTS.ADMINS}/${adminId}`)
  } catch (error) {
    throw new Error("Failed to get profile")
  }
}

export const deleteProfile = async (adminId) => {
  try {
    return await del(`${API_ENDPOINTS.ADMINS}/${adminId}`)
  } catch (error) {
    throw new Error("Failed to get profile")
  }
}