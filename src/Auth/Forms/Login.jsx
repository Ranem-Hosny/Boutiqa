import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router";
import loginImg from "/src/assets/login.jpg";
import { useLogin } from "../../Hooks/auth";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [formInputs, setFormInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const user = useLogin(formInputs);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <>
      <ToastContainer position="center" autoClose={3000} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div
          className="bg-white shadow-xl rounded-xl grid md:grid-cols-2 
                  md:w-[70%] lg:w-[70%] sm:w-[90%] 
                  h-[95vh] mx-auto overflow-hidden 
               "
        >
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome Back
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "password Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setFormInputs(values);
                setSubmitting(false);
                toast.success("Login successfly");
                navigate("/home");
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter your password"
                    />
                    <p className="text-right text-blue-600 text-sm cursor-pointer mt-2 hover:underline">
                      Forgot password?
                    </p>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Sign In
                  </button>

                  <div className="flex items-center gap-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-gray-500">or</span>
                    <hr className="flex-1 border-gray-300" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="w-5"
                      />
                      Google
                    </button>

                    <button className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                      <img
                        src="https://www.svgrepo.com/show/448224/facebook.svg"
                        className="w-5"
                      />
                      Facebook
                    </button>
                  </div>

                  <p className="text-center text-gray-600">
                    New here?
                    <Link to="/register" className="text-blue-600 underline">
                      Create an account
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>

          <div className="">
            <img
              src={loginImg}
              alt="Login"
              className="w-full h-screen object-cover "
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
}
