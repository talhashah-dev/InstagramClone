import Sidebar from "@/layout/Sidebar";
import React from "react";

const Messages = () => {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
    <Sidebar />
    <h1 className="text-white text-lg max-sm:h-screen">Messages Page</h1>
  </div>
  );
};

export default Messages;
