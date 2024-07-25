import React from "react";

const RoomsTable = ({ rooms, setSelectedRoom }) => {
  return (
    <div className="p-2 bg-gray-50 h-full rounded-lg">
      {rooms &&
        rooms.map((item, ind) => (
          <div
            key={ind}
            onClick={() => setSelectedRoom(item?.id)}
            className="px-2 cursor-pointer border bg-white my-1 py-2 rounded-lg font-semibold"
          >
            {item.attributes.name}
          </div>
        ))}
    </div>
  );
};

export default RoomsTable;
