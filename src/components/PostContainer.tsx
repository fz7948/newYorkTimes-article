import { MutableRefObject } from "react";
// components
import PostCard from "./PostCard";
// types
import { DataType } from "../types";

type Props = {
  target: MutableRefObject<HTMLDivElement | null>;
  data: DataType[];
};

export default function PostContainer(props: Props) {
  const { target, data } = props;
  return (
    <section className="flex flex-col w-full h-full px-[20px] py-[20px] gap-[8px] overflow-auto">
      {data && data.map((item) => <PostCard key={item.id} item={item} />)}
      {data.length ? (
        <div
          ref={target}
          style={{
            width: "100%",
            height: 30,
            background: "red",
          }}
        />
      ) : (
        <></>
      )}
    </section>
  );
}
