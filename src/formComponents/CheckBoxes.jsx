import { FormLabel } from "@material-ui/core";

const CheckBoxes = ({ title = "", children }) => {
  return (
    <>
      {title && <FormLabel component="label">{title}</FormLabel>}
      {children}
    </>
  );
};

export default CheckBoxes;
