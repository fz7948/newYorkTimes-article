import React from "react";
//icons
import * as BiIcons from "react-icons/bi";

export default function Loading() {
  return (
    <section
      className={`flex absolute flex-col w-full h-screen justify-center items-center text-xl font-semibold bg-slate-100 opacity-80`}
    >
      페이지 준비중입니다
      <BiIcons.BiAlarm className="ml-4 mt-4 animate-bounce" size={40} />
    </section>
  );
}
