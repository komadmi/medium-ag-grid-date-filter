import * as React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type UpdateDateProps = {
  onDateChanged: () => void;
};

export const DatePickerFilter = React.forwardRef<unknown, UpdateDateProps>((props, ref) => {
  const [date, setDate] = React.useState<Date | null>(null);

  const onDateChanged = (selectedDate: Date) => {
    setDate(selectedDate);
    props.onDateChanged();
  };

  React.useImperativeHandle(ref, () => ({
    getDate() {
      return date;
    },

    setDate(date: Date | null) {
      setDate(date);
    },
  }));

  return (
    <ReactDatePicker
      portalId="root"
      placeholderText="dd-MM-yyyy"
      dateFormat="dd-MM-yyyy"
      popperClassName="ag-custom-component-popup datepicker-filter-popper"
      selected={date}
      onChange={onDateChanged}
      enableTabLoop
      strictParsing
      useWeekdaysShort
    />
  );
});
