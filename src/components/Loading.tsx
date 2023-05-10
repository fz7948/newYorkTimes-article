import React from "react";
//icons
import * as BiIcons from "react-icons/bi";

export default function Loading() {
  return (
    <section
      className={`flex flex-col h-[calc(100%-85px)] justify-center items-center text-xl font-semibold`}
    >
      페이지 로딩중입니다
      <BiIcons.BiAlarm className="ml-4 mt-4 animate-bounce" size={40} />
    </section>
  );
}
