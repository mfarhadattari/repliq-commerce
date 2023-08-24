import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import successAlert from "../../../components/Message/successAlert";
import PageTitle from "../../../components/common/PageTitle";
import useServer from "../../../hooks/useServer";
import generateDateTime from "../../../utils/generateDateTime";

const AddProductPage = () => {
  const { serverReq } = useServer();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handelAddProduct = (data) => {
    const productInfo = {
      name: data.name,
      image: data.image,
      category: data.category,
      price: parseInt(data.price),
      description: data.description,
      timeDate: generateDateTime(),
    };
    serverReq.post("/admin/add-product", productInfo).then(({ data }) => {
      if (data.insertedId) {
        successAlert("Successfully Added!");
        reset();
      }
    });
  };

  return (
    <main className="my-5 p-5 lg:p-0">
      <PageTitle title="Add Product" />
      <section>
        <form onSubmit={handleSubmit(handelAddProduct)} className="space-y-2">
          {/* ------------------ Product Name ---------------- */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors?.name && <ErrorMessage message="Name is required" />}
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {/* ------------------ Product Category ---------------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered"
                {...register("category", { required: true })}
              />
              {errors?.category && (
                <ErrorMessage message="Category is required" />
              )}
            </div>
            {/* ------------------ Product Price ---------------- */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors?.price && <ErrorMessage message="Price is required" />}
            </div>
          </div>
          {/* ------------------ Product Image ---------------- */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL*</span>
            </label>
            <input
              type="url"
              className="input input-bordered"
              placeholder="Image URL"
              {...register("image", { required: true })}
            />
            {errors?.image && <ErrorMessage message="Image URL is required" />}
          </div>
          {/* ------------------ Product Description---------------- */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Products Description*</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              rows={4}
              placeholder="Products Description"
              {...register("description", { required: true })}
            ></textarea>
            {errors?.description && (
              <ErrorMessage message="Description is required" />
            )}
          </div>
          <div className="form-control w-full">
            <button className="btn btn-outline mt-3 ">Add Product</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddProductPage;
