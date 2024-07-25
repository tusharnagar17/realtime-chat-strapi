import axios from "axios";
import { api_url } from "./auth";
import api from "./api";

export const getRooms = async () => {
  try {
    const res = await api.get(`/api/rooms`);
    return res.data;
  } catch (error) {
    console.log("JwtCheck error:", error);
    throw error;
  }
};

export const createNewRoom = async (roomName, id) => {
  try {
    const res = await api.post(`/api/rooms`, {
      data: {
        name: roomName,
        all_users: [id],
      },
    });
    return res.data;
  } catch (error) {
    console.log("JwtCheck error:", error);
    throw error;
  }
};

export const getSelectedRoom = async (id) => {
  try {
    const res = await api.get(`/api/rooms/${id}`);
    return res.data;
  } catch (error) {
    console.log("JwtCheck error:", error);
    throw error;
  }
};
