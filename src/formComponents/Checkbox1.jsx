import styled from "styled-components";
import { useField } from "formik";
import { Checkbox, FormControlLabel, FormHelperText } from "@material-ui/core";

export const Checkbox1 = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <Layout>
      <FormControlLabel control={<Checkbox {...field} />} label={label} />
      <FormHelperText error={Boolean(errorText)}>{errorText}</FormHelperText>
    </Layout>
  );
};

const Layout = styled.div`
  margin-left: 0.5rem;
  * > {
    display: block;
  }
`;
