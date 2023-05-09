import React from "react";
// components
import Select from "react-select";
// types
import { SelectPropsType, SelectBoxType } from "../../type";

type Props = {
  labelName?: string;
  name: string;
  onValue: SelectPropsType;
  onUpdate: (props: SelectBoxType) => void;
  placeholder?: string;
};

const options = [
  { value: 1, label: "1점" },
  { value: 2, label: "2점" },
  { value: 3, label: "3점" },
  { value: 4, label: "4점" },
  { value: 5, label: "5점" },
];

const SelectBox = (props: Props) => {
  const { labelName, name, onValue, onUpdate, placeholder } = props;

  const handleUpdate = (e: SelectPropsType) => {
    onUpdate({ name, value: e.value });
  };

  return (
    <section className="selectBox">
      <label>{labelName}</label>
      <Select
        value={onValue}
        onChange={(e: SelectPropsType) => handleUpdate(e)}
        placeholder={placeholder}
        options={options}
        styles={{
          menu: (provided) => ({ ...provided, zIndex: 9999 }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: 5,
            borderColor: "#ddd",
            height: 40,
            marginTop: 4,
            "&:hover": {
              borderColor: "#ddd",
            },
          }),
        }}
      />
    </section>
  );
};

export default SelectBox;
