import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import "./App.css";

const App = () => {
  return (
    <div>
      <br />
      <Formik
        initialValues={{ firstName: "bob" }}
        onSubmit={(data) => console.log("submit", data)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button type="submit">submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default App;
