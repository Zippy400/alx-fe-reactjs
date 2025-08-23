import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 chars").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Values:", values);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="p-4 bg-green-100 rounded-md max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

        <div className="mb-2">
          <Field name="username" placeholder="Username" className="block w-full p-2 border rounded" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-2">
          <Field type="email" name="email" placeholder="Email" className="block w-full p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-2">
          <Field type="password" name="password" placeholder="Password" className="block w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
