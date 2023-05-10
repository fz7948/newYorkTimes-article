import React from "react";
//icons
import * as BsIcons from "react-icons/bs";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col h-full justify-center items-center text-xl font-semibold">
      <BsIcons.BsFillExclamationTriangleFill
        className="m-4"
        size={40}
        color="red"
      />
      해당 페이지를 찾을 수 없습니다
    </section>
  );
}
