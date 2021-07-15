import { Button, Card, Radio } from "@material-ui/core";
import { Checkbox1 } from "formComponents/Checkbox1";
import { TextField1 } from "formComponents/TextField1";
import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { validationSchema } from "validationSchema";

const App = () => {
  return (
    <div className="form">
      <br />
      <Formik
        initialValues={{
          firstName: "",
          surname: "",
          hasChildren: "",
          gender: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => console.log("submit", data)}
      >
        {({ values, errors }) => (
          <FormLayout>
            <Form>
              <Card variant="outlined">
                <br />
                <FormElementLayout>
                  <TextField1
                    placeholder="First name"
                    name="firstName"
                    type="input"
                  />
                </FormElementLayout>
                <FormElementLayout>
                  <TextField1
                    placeholder="Surname"
                    name="surname"
                    type="input"
                  />
                </FormElementLayout>
                <FormElementLayout>
                  <Checkbox1
                    label="Do you have children?"
                    name="hasChildren"
                    type="checkbox"
                  />
                </FormElementLayout>
                <RadioTextLayout>What is your gender?</RadioTextLayout>
                <RadioLayout>
                  <Field
                    name="gender"
                    type="radio"
                    value="male"
                    as={Radio}
                  ></Field>
                  Male
                  <Field
                    name="gender"
                    type="radio"
                    value="female"
                    as={Radio}
                  ></Field>
                  Female
                </RadioLayout>
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

const FormLayout = styled.form`
  width: 20rem;
  margin: 2rem auto;
`;

const FormElementLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const RadioTextLayout = styled.div`
  margin: 1rem 1rem 0.5rem 3.5rem;
`;

const RadioLayout = styled.div`
  margin: 0.5rem 1rem 1rem 3rem;
`;

export default App;
