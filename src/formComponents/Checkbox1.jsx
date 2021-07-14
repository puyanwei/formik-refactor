import { useField } from "formik";
import { Checkbox, FormControlLabel, FormHelperText } from "@material-ui/core";

export const Checkbox1 = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <>
      <FormControlLabel control={<Checkbox {...field} />} label={label} />
      <FormHelperText error={Boolean(errorText)}>{errorText}</FormHelperText>
    </>
  );
};
