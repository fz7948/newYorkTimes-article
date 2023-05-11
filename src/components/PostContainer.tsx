import { MutableRefObject } from "react";
// components
import PostCard from "./PostCard";
// types
import { DataType } from "../types";

type Props = {
  target: MutableRefObject<HTMLDivElement | null>;
  data: DataType[];
  onStarClick: (id: DataType) => void;
  onCheckedById: Set<string>;
};

export default function PostContainer(props: Props) {
  const { target, data, onStarClick, onCheckedById } = props;
  return (
    <section className="flex flex-col w-full h-full px-[20px] py-[20px] gap-[8px] overflow-auto">
      {data &&
        data.map((item) => (
          <PostCard
            key={item.id}
            item={item}
            onStarClick={onStarClick}
            onCheckedById={onCheckedById}
          />
        ))}
      {data.length ? <div ref={target} className="w-full h-[30px]" /> : <></>}
    </section>
  );
}
