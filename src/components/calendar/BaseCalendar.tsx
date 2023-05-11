import React from "react";

// import { memberFormType } from '../../shared/types/member';
import { toStringByFormatting } from "../../utils";
// date picker
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// material
import { TextField, InputAdornment } from "@mui/material";
import CalendarIcon from "../icon/CalendarIcon";

type CalendarProps = {
  label?: string | undefined;
  name: string;
  onSelect: string | undefined;
  onUpdate: (props: any) => void;
};

const BaseCalendar = (props: CalendarProps) => {
  const { label, name, onSelect = 0, onUpdate } = props;

  const CustomInput = React.forwardRef((p: any, ref) => {
    return (
      <TextField
        autoComplete="off"
        size="medium"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CalendarIcon />
            </InputAdornment>
          ),
          style: { height: "40px", width: "280px" },
        }}
        label={label}
        name={name}
        {...p}
        ref={ref}
      />
    );
  });

  const onCalendarUpdate = (date: Date) => {
    onUpdate({ name, value: toStringByFormatting(date, "-") });
  };

  return (
    <DatePicker
      locale={ko}
      placeholderText="날짜를 입력해주세요."
      selected={!onSelect ? undefined : new Date(onSelect)}
      dateFormat="yyyy-MM-dd"
      onChange={(date: Date) => onCalendarUpdate(date)}
      customInput={<CustomInput />}
    />
  );
};

export default BaseCalendar;
