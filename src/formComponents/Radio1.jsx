import { useField } from "formik";
import { Radio, FormControlLabel, FormHelperText } from "@material-ui/core";

export const Radio1 = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(`field`, field);
  console.log(`meta`, meta);
  return (
    <FormControlLabel
      control={<Radio {...field} />}
      label={label}
      value={label}
    />
  );
};
