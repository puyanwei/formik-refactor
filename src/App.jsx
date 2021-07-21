import styled from "styled-components";
import { Button, Card } from "@material-ui/core";
import { TextField1 } from "FormComponents/TextField1";
import { Form, Formik } from "formik";
import { FormElementLayout } from "shared/styledComponents";
import { initialValues } from "initialValues";
import { validationSchema } from "validationSchema";
import RadioButtons from "FormComponents/RadioButtons";
import CheckBoxes from "FormComponents/CheckBoxes";

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
                <CheckBoxes
                  title="Your preferences"
                  labels={[
                    { label: "Do you have children?", name: "hasChildren" },
                    { label: "Do you like pets?", name: "likesPets" },
                  ]}
                />
                <RadioButtons
                  name="gender"
                  title="What is your gender?"
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

export default App;
