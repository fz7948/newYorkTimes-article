import { AiOutlineStar, AiFillStar } from "react-icons/ai";

type Props = {
  active: boolean;
};

export default function StarIcon(props: Props) {
  const { active } = props;

  return (
    <>
      {active ? (
        <AiFillStar className="w-[18px] h-[18px]" color="#FFB800" />
      ) : (
        <AiOutlineStar className="w-[18px] h-[18px]" />
      )}
    </>
  );
}
