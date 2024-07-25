"use client";
import ChatBox from "@/components/ChatBox";
import CreateRoomForm from "@/components/CreateRoom";
import LiveUser from "@/components/LiveUser";
import Image from "next/image";
import RoomsTable from "@/components/RoomsTable";
import { useState, useEffect } from "react";
import { api_url, getCurrentUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { createNewRoom, getRooms, getSelectedRoom } from "@/services/rooms";
import { getRoomMessage, updateMessages } from "@/services/messages";
import { socket } from "@/socket";

export default function Home() {
  const [currentUser, setCurrentUser] = useState();
  const [allRooms, setAllRooms] = useState();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomData, setSelectedRoomData] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [allMessage, setAllMessage] = useState();
  const [transport, setTransport] = useState();
  const [isConnected, setIsConnected] = useState();

  const router = useRouter();

  //
  // socket.io connection
  // establish connection
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);

      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);

      setTransport("N/A");
    }

    socket.on("connect", onConnect);

    socket.on("groupMessage", (data) => {
      console.log("server backend", data);
      if (data.room === selectedRoom) {
        setAllMessage((temp) => [
          ...temp,
          { attributes: { content: data.message } },
        ]);
      }
    });

    socket.on("onlineUsers", (name) => {
      setOnlineUsers(name);
    });

    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("groupMessage");
      socket.off("disconnect", onDisconnect);
      socket.off("onlineUsers");
    };
  }, [selectedRoom]);

  // Check logged in user jwt token
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
      try {
        const data = await getCurrentUser(token);
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // fetch all rooms
  useEffect(() => {
    async function fetchData() {
      const res = await getRooms();
      setAllRooms(res.data);
    }
    fetchData();
  }, [createNewRoom]);

  // fetch specific rooms
  useEffect(() => {
    if (!selectedRoom) return; // Only run if selectedRoom is not null or undefined

    const fetchData = async () => {
      try {
        const res = await getSelectedRoom(selectedRoom);
        console.log("set SelectedRoomData", res.data);
        setSelectedRoomData(res.data);
        socket.emit("joinRoom", {
          roomId: selectedRoom,
          username: currentUser.username,
        });
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchData();
  }, [selectedRoom]);

  useEffect(() => {
    if (!selectedRoom) return;

    const fetchData = async () => {
      try {
        const res = await getRoomMessage(selectedRoom);
        setAllMessage(res.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchData();
  }, [selectedRoom]);

  const createRoomFunc = async (roomName) => {
    const result = await createNewRoom(roomName, currentUser?.id);
  };

  const handleSendMessage = async (tempData) => {
    const res = await updateMessages(tempData);
    socket.emit("roomMessage", tempData);
    console.log("updates message data", res);
  };

  const logout = async () => {
    localStorage.setItem("token", "");
    window.location.href = "/";
  };
  return (
    <div className="h-[80vh] w-full">
      <div className="flex justify-between gap-4 max-w-7xl mx-auto items-center py-6">
        <div className="text-lg font-semibold">
          {currentUser?.username && `Username: ${currentUser.username}`}
        </div>
        <CreateRoomForm createRoomFunc={createRoomFunc} />
        <button
          onClick={logout}
          className="px-4 py-1 rounded-xl  bg-violet-400 hover:bg-white border-2 border-violet-400"
        >
          {" "}
          Logout{" "}
        </button>
      </div>
      <div
        className="p-4 h-full 
      flex  justify-center gap-4"
      >
        <div className="w-[20%] rounded-xl">
          <RoomsTable rooms={allRooms} setSelectedRoom={setSelectedRoom} />
        </div>
        <div className="w-[60%]">
          <ChatBox
            selectedRoom={selectedRoom}
            currentUser={currentUser}
            message={allMessage}
            selectedRoomData={selectedRoomData}
            handleSendMessage={handleSendMessage}
          />
        </div>
        <div className="w-[20%]">
          <LiveUser onlineUsers={onlineUsers} />
        </div>
      </div>
    </div>
  );
}
