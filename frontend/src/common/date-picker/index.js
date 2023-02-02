import * as React from "react";
import TextField from "@mui/material/TextField";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormikContext } from "formik";

export default function DateField({ name, label }) {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(name, new Date(value).getTime());
  };

  return (
    <>
      <DatePicker
        label={label}
        value={values[name]}
        minDate={new Date().getTime()}
        onChange={(value) => handleChange(value)}
        renderInput={(params) => (
          <TextField fullWidth size="small" {...params} />
        )}
      />
    </>
  );
}
