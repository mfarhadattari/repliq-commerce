import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/Message/ErrorMessage";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";

const RegisterPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
  };

  return (
    <main className="my-10">
      <PageTitle title="Register" />
      <section>
        <SectionTitle heading="Crete new account!" />
        <div className="p-5 w-full md:w-2/3 lg:w-1/2 mx-auto">
          <form className="mt-5" onSubmit={handleSubmit(handelRegister)}>
            <div className="flex flex-col md:flex-row md:gap-5">
              {/* -------- Name ------------- */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("displayName", { required: true })}
                />
                {errors.displayName?.type === "required" && (
                  <ErrorMessage message="Name is required" />
                )}
              </div>
              {/* -------- Phone ------------- */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input input-bordered ps-28 w-full"
                    {...register("phoneNumber", {
                      required: true,
                      pattern: /^\d+$/,
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
            </div>

            <div className="flex flex-col md:flex-row md:gap-5">
              {/* ----------- Photo URL ---------- */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Profile URL</span>
                </label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL?.type == "required" && (
                  <ErrorMessage message="Photo URL is required" />
                )}
              </div>
              {/* ----------- Password ---------- */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordShow ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
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
                {errors.password?.type === "minLength" && (
                  <ErrorMessage message="Password must be 6 character" />
                )}
                {errors.password?.type === "maxLength" && (
                  <ErrorMessage message="Password less then 12 character" />
                )}
              </div>
            </div>
            <div className="form-control w-full mt-3">
              <button className="btn btn-outline">Register</button>
            </div>
            <p className="my-3 text-base text-center">
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-blue-600">
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
