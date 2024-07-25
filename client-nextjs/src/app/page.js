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

export default function Home() {
  const [currentUser, setCurrentUser] = useState();
  const [allRooms, setAllRooms] = useState();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomData, setSelectedRoomData] = useState(null);
  const [allUsers, setAllUsers] = useState();
  const [allMessage, setAllMessage] = useState();

  const router = useRouter();

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

    console.log("updates message data", res);
  };
  return (
    <div className="h-[80vh] w-full">
      <div className="flex justify-center py-6">
        <CreateRoomForm createRoomFunc={createRoomFunc} />
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
          <LiveUser />
        </div>
      </div>
    </div>
  );
}
