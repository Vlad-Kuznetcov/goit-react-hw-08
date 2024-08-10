import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "../ContactForm/ContactForm.module.css";

const ContactForm = ({ handleAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, "min 3")
      .max(50, "max 50")
      .required("Is required"),
    number: Yup.string()
      .min(3, "min 3")
      .max(15, "max 15")
      .required("Is required"),
  });

  const handleSubmit = (values, options) => {
    handleAddContact(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={contactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.container}>
          <h2 className={s.labelTitle}>Name</h2>
          <label name="name">
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.errorMess} name="name" component="div" />
          </label>
          <h2 className={s.labelTitle}>Number</h2>
          <label name="number">
            <Field className={s.input} name="number" />
            <ErrorMessage
              className={s.errorMess}
              name="number"
              component="div"
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
