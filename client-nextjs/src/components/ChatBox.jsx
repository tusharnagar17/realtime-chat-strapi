import React, { useState } from "react";

const ChatBox = ({
  message,
  selectedRoomData,
  handleSendMessage,
  currentUser,
  selectedRoom,
}) => {
  const [text, setText] = useState("");
  const { name } = selectedRoomData?.attributes || {};

  const handleClick = () => {
    const data = {
      content: text,
      roomId: selectedRoom,
      sender: currentUser?.id,
    };
    handleSendMessage(data);

    setText("");
  };

  return (
    <div className="h-full flex flex-col">
      {/* Room Name */}
      {name && (
        <div className="flex-[5%] bg-red-100 p-2 rounded-xl text-center font-semibold text-xl">
          {name}
        </div>
      )}

      {/* Room Messages */}
      <div className="h-full overflow-y-auto">
        {message ? (
          message.map((item, ind) => {
            return (
              <div
                key={ind}
                className="bg-sky-100 w-fit px-2 rounded-full py-1 my-1"
              >
                {item.attributes?.content}
              </div>
            );
          })
        ) : (
          <div className="flex text-xl font-semibold justify-center items-center h-[80%]">
            Select Room to start chatting!
          </div>
        )}
      </div>

      {/* Input Message */}
      <div className="h-[10%] flex bottom-0 w-full p-2">
        <input
          type="text"
          placeholder="Enter your message"
          className="w-[90%] p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
