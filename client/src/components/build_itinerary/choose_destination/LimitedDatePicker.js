import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker } from "antd";
dayjs.extend(customParseFormat);

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

export const LimitedDatePicker = ({ onChange }) => (
  <DatePicker
    format="YYYY-MM-DD"
    disabledDate={disabledDate}
    onChange={onChange}
  />
);
