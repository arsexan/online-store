import { Formik, Field, Form } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { signInFetch } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../api/utils/constants";

const signInSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) navigate("/products");
  }, [navigate]);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const res = await signInFetch(values);
    if (res.ok) {
      const response = await res.json();
      localStorage.setItem(TOKEN, response.token);
      return navigate("/products");
    }
    // проверки if(!res.ok)
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="enter password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
