import React from "react";

const LiveUser = () => {
  return (
    <div className="bg-sky-50 h-full px-2 py-2 rounded-xl">
      <div className="text-center text-lg font-semibold">Online Users</div>
      <div className="flex flex-col px-2">
        {[0, 1, 2, 3, 4, 5].map((item, ind) => {
          return (
            <div key={ind} className="my-1 bg-sky-100 px-2 py-1 rounded-lg">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveUser;
