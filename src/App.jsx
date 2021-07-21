import { Button, Card } from "@material-ui/core";
import { Checkbox1 } from "formComponents/Checkbox1";
import { TextField1 } from "formComponents/TextField1";
import { Form, Formik } from "formik";
import { FormElementLayout } from "shared/styledComponents";
import styled from "styled-components";
import { initialValues } from "initialValues";
import { validationSchema } from "validationSchema";
import RadioGroup1 from "formComponents/RadioGroup1";

const App = () => {
  return (
    <div className="form">
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data) => console.log("submit", data)}
      >
        {({ values, errors }) => (
          <FormLayout>
            <Form>
              <Card variant="outlined">
                <br />
                <TextField1 placeholder="First name" name="firstName" />
                <TextField1 placeholder="Surname" name="surname" />
                <Checkbox1 label="Do you have children?" name="hasChildren" />
                <Checkbox1 label="Do you like pets?" name="likesPets" />
                <RadioGroup1
                  name="gender"
                  label="What is your gender?"
                  options={["male", "female"]}
                />
                <FormElementLayout>
                  <Button type="submit">submit</Button>
                </FormElementLayout>
                <br />
                <br />
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </Card>
            </Form>
          </FormLayout>
        )}
      </Formik>
    </div>
  );
};

// https://github.com/benawad/react-formik-example/blob/master/src/FormFields/SelectFormField.tsx

// https://youtu.be/yAUuZXcCwcw

const FormLayout = styled.div`
  width: 20rem;
  margin: 2rem auto;
`;

const RadioTextLayout = styled.div`
  margin: 1rem 1rem 0.5rem 3.5rem;
`;

export default App;
