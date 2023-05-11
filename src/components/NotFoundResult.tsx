import { useNavigate } from "react-router-dom";
// icons
import FileIcon from "../components/icon/FileIcon";

export default function NotFoundResult() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col w-full h-full justify-center items-center">
      <FileIcon />
      <div className="mt-2 text-[18px]">저장된 스크랩이 없습니다.</div>
      <button
        type="button"
        className="w-full h-[60px] bg-[#3478f6] text-white font-[600] text-[16px] rounded-[16px] mt-[20px]"
        onClick={() => navigate("/")}
      >
        스크랩 하러 가기
      </button>
    </section>
  );
}
