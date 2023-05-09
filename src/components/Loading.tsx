import React from "react";
//icons
import * as BiIcons from "react-icons/bi";

export default function Loading() {
  return (
    <h1 className="flex justify-center items-center w-full h-screen bg-slate-100">
      페이지 로딩중입니다
      <BiIcons.BiAlarm className="ml-4 animate-bounce" size={40} />
    </h1>
  );
}
