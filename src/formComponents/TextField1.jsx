import { useField } from "formik";
import { TextField } from "@material-ui/core";

export const TextField1 = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      placeholder={placeholder}
      helperText={errorText}
      error={Boolean(errorText)}
    />
  );
};
