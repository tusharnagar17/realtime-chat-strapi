import api from "./api";
import { getSelectedRoom } from "./rooms";

// get all message of selected Room
export const getRoomMessage = async (roomId, userId) => {
  try {
    const res = await api.get(`/api/messages/`, {
      params: {
        "filters[roomId][$eq]": roomId, // Filter messages where roomId equals the specified roomId
        sort: "createdAt:asc", // Sort messages by createdAt in ascending order
      },
    });
    return res.data;
  } catch (error) {
    console.log("Get messages error:", error);
    throw error;
  }
};

export const updateMessages = async (data) => {
  try {
    const res = await api.post("/api/messages", {
      data: data,
    });
    return res;
  } catch (error) {
    console.log("Update Messages: ", error);
    throw error;
  }
};
