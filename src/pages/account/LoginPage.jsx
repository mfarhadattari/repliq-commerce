import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/Message/ErrorMessage";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";

const LoginPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    console.log(data);
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
                  {...register("phoneNumber", {
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
              {errors.phoneNumber?.type == "required" && (
                <ErrorMessage message="Phone number is required" />
              )}
              {errors.phoneNumber?.type == "pattern" && (
                <ErrorMessage message="Phone number is must number" />
              )}
              {(errors.phoneNumber?.type == "minLength" ||
                errors.phoneNumber?.type == "maxLength") && (
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
