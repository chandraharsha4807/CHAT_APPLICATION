import axiosInstance from "../../utils/axiosUtils";

const loginUser = async (payload: any) => {
  try {
    return await axiosInstance('VITE_NODE_URL').post("/user/login", payload as any);
  } catch (e) {
    throw e;
  }
};

const signUpUser = async (payload: any) => {
  try {
    return await axiosInstance('VITE_NODE_URL').post("/user/create", payload as any);
  } catch (e) {
    throw e;
  }
};

export const userService = {
  loginUser,
  signUpUser,
};
