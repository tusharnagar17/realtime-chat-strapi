import Image from "next/image";

export default function Home() {
  return (
    <div
      className="p-4 h-[100vh] border-2 border-red-300
      flex  justify-center gap-4"
    >
      <div className="w-1/3 border-2 border-red-500">
        <div>Rooms</div>
        <div>Users</div>
      </div>
      <div className="w-2/3">
        <div>Chat Window</div>
      </div>
    </div>
  );
}
