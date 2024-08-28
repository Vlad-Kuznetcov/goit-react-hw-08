import { Link } from "react-router-dom";
import s from "../LoginForm/LoginForm.module.css";
import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, option) => {
    dispatch(loginThunk(values));
    option.resetForm();
  };
  return (
    <div className={s.hero}>
      <div className={`${s.heroContent} ${s.heroContentLg}`}>
        <div className={`${s.textCenter} ${s.textLeftLg}`}>
          <h1 className={s.title}>Log in!</h1>
        </div>
        <div className={s.card}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.cardBody}>
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
                  <Link to="/singup" className={s.linkHover}>
                    You did not have account? Sing up!
                  </Link>
                </label>
              </div>
              <div className={s.formControl}>
                <button type="submit" className={s.btnPrimary}>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
