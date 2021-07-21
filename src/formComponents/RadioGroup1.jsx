import styled from "styled-components";
import { useField } from "formik";
import {
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { FormLabel } from "@material-ui/core";

const RadioGroup1 = ({ options, label = "", ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <RadioLayout>
      {label && <FormLabel component="label">{label}</FormLabel>}
      <RadioGroup {...field} {...props}>
        {options.map((option) => (
          <FormControlLabel value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>

      <FormHelperText error={Boolean(errorText)}>{errorText}</FormHelperText>
    </RadioLayout>
  );
};

const RadioLayout = styled.div`
  margin: 0.5rem 1rem 1rem 3rem;
`;
export default RadioGroup1;
