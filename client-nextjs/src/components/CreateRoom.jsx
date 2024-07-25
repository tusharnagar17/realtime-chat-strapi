"use client";
import React, { useState } from "react";

const CreateRoomForm = ({ createRoomFunc }) => {
  const [roomName, setRoomName] = useState("");

  const formSubmit = (ev) => {
    ev.preventDefault();
    createRoomFunc(roomName);
    setRoomName("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="roomname" className="text-lg font-semibold">
          Room Name:{" "}
        </label>
        <input
          type="text"
          name="roomname"
          id="roomname"
          className="outline-none border-2 rounded-lg px-2 hover:border-none mx-2 py-1 border-black hover:ring-2 ring-sky-500 "
          value={roomName}
          onChange={(ev) => setRoomName(ev.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-300 hover:bg-white border-2 border-sky-300 rounded-lg px-2 py-1"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoomForm;
