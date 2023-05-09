import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
  placeholder: string;
};

export default function SearchInput(props: Props) {
  const { onChange, onReset, placeholder } = props;

  const inputRef = React.useRef<any>(null);

  const handleInputReset = () => {
    if (inputRef.current && onReset) {
      inputRef.current.value = "";
      onReset();
    }
  };

  return (
    <section className="relative flex items-center">
      <input
        ref={inputRef}
        className="w-full h-[40px] border border-[#ddd] bg-[#f5f5f5] rounded-[5px] pl-[8px]"
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        className="absolute right-0 mr-2"
        type="reset"
        onClick={handleInputReset}
      >
        {inputRef.current?.value && (
          <AiFillCloseCircle size={22} color="#C4C4C4" />
        )}
      </button>
    </section>
  );
}
