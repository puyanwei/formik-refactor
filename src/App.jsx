import { Button, Checkbox, Radio } from "@material-ui/core";
import { Checkbox1 } from "formComponents/Checkbox1";
import { TextField1 } from "formComponents/TextField1";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "validationSchema";
import "./App.css";

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
          <Form>
            <div>
              <TextField1
                placeholder="First name"
                name="firstName"
                type="input"
              />
            </div>
            <div>
              <TextField1 placeholder="Surname" name="surname" type="input" />
            </div>
            <div>
              <Checkbox1
                label="Do you have children?"
                name="hasChildren"
                type="checkbox"
              />
            </div>
            <div>
              <div>What is your gender?</div>
              <Field name="gender" type="radio" value="male" as={Radio}></Field>
              Male
              <Field
                name="gender"
                type="radio"
                value="female"
                as={Radio}
              ></Field>
              Female
            </div>
            <div>
              <Button type="submit">submit</Button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default App;
