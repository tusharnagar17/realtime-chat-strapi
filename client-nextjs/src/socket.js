import { io } from "socket.io-client";

const isBrowser = typeof window !== "undefined";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:1337";

export const socket = isBrowser ? io(URL) : {};
