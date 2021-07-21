import { useField } from "formik";
import { Checkbox, FormControlLabel, FormHelperText } from "@material-ui/core";
import styled from "styled-components";

const CheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <CheckBoxLayout>
      <FormControlLabel control={<Checkbox {...field} />} label={label} />
      <FormHelperText error={Boolean(errorText)}>{errorText}</FormHelperText>
    </CheckBoxLayout>
  );
};

const CheckBoxLayout = styled.div`
  margin-left: 0.5rem;
  * > {
    display: block;
  }
`;

export default CheckBox;
