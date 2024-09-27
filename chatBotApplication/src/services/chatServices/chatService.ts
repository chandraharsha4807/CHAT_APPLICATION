import axiosInstance from "../../utils/axiosUtils";

const llmService = async (payload: any) => {
  try {
    return await axiosInstance("VITE_NODE_URL").post(
      "/generate-text",
      payload as any
    );
  } catch (e) {
    throw e;
  }
};

export const chatService = {
  llmService,
};
