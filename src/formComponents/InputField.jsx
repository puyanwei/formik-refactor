import { useField } from "formik";
import { FormLabel, TextField } from "@material-ui/core";
import { FormElementLayout } from "shared/styledComponents";

const InputField = ({ label = "", placeholder = "", ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <>
      {label && <FormLabel component="label">{label}</FormLabel>}
      <FormElementLayout>
        <TextField
          {...field}
          placeholder={placeholder}
          helperText={errorText}
          error={Boolean(errorText)}
        />
      </FormElementLayout>
    </>
  );
};

export default InputField;
