import React from "react";

const LiveUser = ({ onlineUsers }) => {
  return (
    <div className="bg-sky-50 h-full px-2 py-2 rounded-xl">
      <div className="text-center text-lg font-semibold">Online Users</div>
      <div className="flex flex-col px-2">
        {onlineUsers.length > 0 ? (
          onlineUsers.map((item, ind) => {
            return (
              <div key={ind} className="my-1 bg-sky-100 px-2 py-1 rounded-lg">
                {item}
              </div>
            );
          })
        ) : (
          <div className="pt-6 text-center font-semibold text-xl text-red-300">
            No online User
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveUser;
