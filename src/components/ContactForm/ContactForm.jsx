import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const intialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, options) => {
    console.log({ ...data, id: nanoid() });
    options.resetForm();
  };
  return (
    <Formik initialValues={intialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field input type="text" name="name" />
        </label>
        <label>
          Number
          <Field input type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
