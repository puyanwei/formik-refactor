import styled from "styled-components";
import { Button, Card } from "@material-ui/core";
import { Form, Formik } from "formik";
import { FormElementLayout } from "shared/styledComponents";
import { initialValues } from "initialValues";
import { validationSchema } from "validationSchema";
import RadioButtons from "FormComponents/RadioButtons";
import CheckBoxes from "FormComponents/CheckBoxes";
import InputField from "FormComponents/InputField";

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
                <InputField placeholder="First name" name="firstName" />
                <InputField placeholder="Surname" name="surname" />
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

const FormLayout = styled.div`
  width: 20rem;
  margin: 2rem auto;
`;

export default App;
