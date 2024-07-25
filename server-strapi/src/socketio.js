const { Server } = require("socket.io");

module.exports = (strapi) => {
  const io = new Server(strapi.server.httpServer, {
    cors: {
      origin: "*",
    },
  });

  const onlineUsers = new Set();

  io.on("connection", (socket) => {
    console.log("A user connected");

    // join room
    socket.on("joinRoom", (item) => {
      socket.join(item.roomId);
      onlineUsers.add(item.username);
      io.emit("onlineUsers", Array.from(onlineUsers));
      console.log(`User joined room: ${item.roomId} ${item.username}`);
    });

    // room message
    socket.on("roomMessage", (data) => {
      io.to(data.roomId).emit("groupMessage", {
        room: data.roomId,
        message: data.content,
      });
      console.log(`Message sent to room ${data.roomId}: ${data.content}`);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });

  return io;
};
