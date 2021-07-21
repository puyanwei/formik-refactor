import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("Required field"),
  surname: yup.string().required("Required field"),
  hasChildren: yup.boolean().required("Required field"),
  likesPets: yup.boolean().required("Required field"),
  gender: yup.string().required("Required field"),
});

export { validationSchema };
