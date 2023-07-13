import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import {GrAttachment} from "react-icons/gr"
import {RiSendPlaneFill} from "react-icons/ri"

function ChatSection() {
  const data = [
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 1,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 1,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 1,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 1,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 1,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
    {
      message: "Hey How are you today?",
      by: 1,
    },
    {
      message: "Hey How are you today?",
      by: 0,
    },
  ];
  return (
    <div className="flex flex-col flex-auto h-full ">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl   px-4">
        <div className="flex flex-col h-full overflow-x-auto ">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              {data.map((item) => (
                <div
                  className={`${
                    item.by === 0
                      ? "col-start-1 col-end-8"
                      : "col-start-6 col-end-13"
                  } p-3 rounded-lg`}
                >
                  <div
                    className={`${
                      item.by === 0
                        ? "flex-row"
                        : "justify-start flex-row-reverse"
                    } flex  items-center`}
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-200 flex-shrink-0">
                      {item.by === 0 ? "A" : "B"}
                    </div>
                    <div
                      className={`${
                        item.by === 0
                          ? "bg-gray-100 ml-3"
                          : "bg-indigo-100 mr-3"
                      } relative  text-sm  py-2 px-4 shadow rounded-xl`}
                    >
                      <div>{item.message}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center sticky  border-t-2  bottom-0  bg-white w-full py-4 px-2">
          <div>
            <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
             <GrAttachment />
            </button>
          </div>
          <div className="flex-grow ml-3">
            <div className="relative w-full">
              <input
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 px-4 h-10 bg-gray-100"
              />
              
            </div>
          </div>
          <div className="ml-3">
            <button className="flex items-center justify-center  bg-[#0B4A7B] rounded-xl text-white px-4 py-1 flex-shrink-0">
             
              <span className=" my-auto">
                <RiSendPlaneFill />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
