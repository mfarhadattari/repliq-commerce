import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";

const AddCustomerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddCustomer = (data) => {
    console.log(data);
  };

  return (
    <main>
      <PageTitle title="Add Customer" />
      <section className="my-10">
        <SectionTitle heading="Add Customer" />
        <div className="card md:w-1/2 mx-auto">
          <form
            className="card-body w-full"
            onSubmit={handleSubmit(handleAddCustomer)}
          >
            <div className="form-control ">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name?.type == "required" && (
                <ErrorMessage message="Name is required" />
              )}
            </div>
            <div className="form-control">
              <div className="relative border rounded-lg">
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
                <p className="absolute h-full top-0 flex p-2 items-center bg-base-300">
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
                <ErrorMessage message="Phone number must 10 character" />
              )}
            </div>
            <div className="form-control">
              <input
                type="url"
                placeholder="PhotoURL"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL?.type == "required" && (
                <ErrorMessage message="Photo URL is required" />
              )}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success text-white rounded-none"
              >
                Add Customer
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddCustomerPage;
