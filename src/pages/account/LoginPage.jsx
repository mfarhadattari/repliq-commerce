import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/Message/ErrorMessage";
import errorAlert from "../../components/Message/errorAlert";
import successAlert from "../../components/Message/successAlert";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";
import useServer from "../../hooks/useServer";

const LoginPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const { serverReq } = useServer();
  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location?.state?.from || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    const { password, userPhone } = data;
    const userInfo = {
      password,
      userPhone: `+880${userPhone}`,
    };

    serverReq.post("/auth/login", userInfo).then(({ data }) => {
      if (data.token) {
        localStorage.setItem("RepliqCommerceToken", data.token);
        successAlert("Successfully Login");
        reset();
        return navigate(redirect, { replace: true });
      }
      if (data.error) {
        return errorAlert(data.message);
      } else {
        errorAlert("Something is wrong!");
      }
    });
  };

  return (
    <main className="my-20">
      <PageTitle title="Login" />
      <section>
        <SectionTitle heading="Login Your Account!" />
        <div className="p-5 w-full md:w-2/3 lg:w-2/6 mx-auto">
          <form className="mt-5" onSubmit={handleSubmit(handelLogin)}>
            {/* -------- Phone ------------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <div className="relative ">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered ps-28 w-full"
                  {...register("userPhone", {
                    required: true,
                    pattern: /^[0-9]+$/,
                    maxLength: 10,
                    minLength: 10,
                  })}
                />
                <p className="absolute h-full top-0 flex p-2 items-center bg-base-300 rounded-s-lg">
                  (BD) +880
                </p>
              </div>
              {errors.userPhone?.type == "required" && (
                <ErrorMessage message="Phone number is required" />
              )}
              {errors.userPhone?.type == "pattern" && (
                <ErrorMessage message="Phone number is must number" />
              )}
              {(errors.userPhone?.type == "minLength" ||
                errors.userPhone?.type == "maxLength") && (
                <ErrorMessage message="Phone number must 10 number" />
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={passwordShow ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input w-full input-bordered"
                  {...register("password", {
                    required: true,
                  })}
                />
                <button
                  type="button"
                  className="absolute top-4 right-3 text-xl"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {passwordShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <ErrorMessage message="Password is Required" />
              )}
            </div>
            <div className="form-control w-full mt-3">
              <button className="btn btn-outline">Login</button>
            </div>
            <p className="my-3 text-base text-center">
              Do not have any account ?{" "}
              <Link to="/register" className="link link-hover text-blue-600">
                Create new account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
