import { Link } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import s from "../SingupForm/SingupForm.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const SignupForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, option) => {
    // console.log(values);
    dispatch(registerThunk(values));
    option.resetForm();
  };
  return (
    <div className={s.hero}>
      <div className={`${s.heroContent} ${s.heroContentLg}`}>
        <div className={`${s.textCenter} ${s.textLeftLg}`}>
          <h1 className={s.title}>Sing Up!</h1>
        </div>
        <div className={s.card}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.cardBody}>
              <div className={s.formControl}>
                <label className={s.label}>
                  <span>Name</span>
                </label>
                <Field
                  name="name"
                  placeholder="name"
                  className={s.input}
                  required
                />
              </div>
              <div className={s.formControl}>
                <label className={s.label}>
                  <span>Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className={s.input}
                  required
                />
              </div>
              <div className={s.formControl}>
                <label className={s.label}>
                  <span>Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className={s.input}
                  required
                />
                <label className={s.label}>
                  <Link to="/login" className={s.linkHover}>
                    You already have account? Sing in!
                  </Link>
                </label>
              </div>
              <div className={s.formControl}>
                <button className={s.btnPrimary}>SingUp</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
