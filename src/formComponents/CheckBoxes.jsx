import styled from "styled-components";
import { useField } from "formik";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";

const CheckBoxes = ({ title, labels, ...props }) => {
  const [field] = useField(props);
  return (
    <CheckBoxLayout>
      {title && <FormLabel component="label">{title}</FormLabel>}
      <FormGroup {...field} {...props}>
        {labels.map(({ label, name }) => (
          <FormControlLabel
            control={<Checkbox name={name} {...field} />}
            label={label}
          />
        ))}
      </FormGroup>
    </CheckBoxLayout>
  );
};

const CheckBoxLayout = styled.div`
  margin-left: 0.5rem;
  * > {
    display: block;
  }
`;

export default CheckBoxes;
