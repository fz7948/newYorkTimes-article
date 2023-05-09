import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

export default function NotFoundResult() {
  return (
    <div className="relative flex justify-center items-center text-xl animate-[fadeIn_1.5s_ease-in-out]">
      결과가 없습니다
      <div className="ml-4">
        <AiIcons.AiFillFileExclamation size={30} color="#a4a4a4" />
        <BiIcons.BiSearch
          className="absolute top-0 animate-[search_4s_infinite]"
          size={23}
          color="#505050"
        />
      </div>
    </div>
  );
}
