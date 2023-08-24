import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import successAlert from "../../../components/Message/successAlert";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";
import useServer from "../../../hooks/useServer";
import generateDateTime from "../../../utils/generateDateTime";

const UpdateProductPage = () => {
  const { serverReq } = useServer();

  const { id } = useParams();
  const {
    data: product,
    isLoading: isProductLoading,
    refetch,
  } = useFetchData(`/products/${id}`, {}, [id]);

  const [imageURL, setImageURL] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handler product update
  const handelProductUpdate = (data) => {
    const productInfo = {
      name: data.name,
      image: data.image,
      category: data.category,
      price: parseInt(data.price),
      description: data.description,
      timeDate: generateDateTime(),
    };

    serverReq
      .patch(`/admin/update-product/${product._id}`, productInfo)
      .then(({ data }) => {
        if (data.modifiedCount > 0) {
          successAlert("Updated Successfully!");
          refetch();
        }
      });
  };

  return (
    <main>
      <PageTitle title="Update Product" />
      <section>
        <SectionTitle heading="Update Product" />
        {isProductLoading ? (
          <Loaders />
        ) : (
          <div className="my-10 p-5 md:p-10">
            <form onSubmit={handleSubmit(handelProductUpdate)}>
              <div className="grid grid-col md:grid-cols-2 md:items-end lg:items-start lg:grid-cols-3 gap-5">
                <div>
                  <div>
                    <label className="label">
                      <span className="label-text">Product Image*</span>
                    </label>
                    <img src={imageURL || product.image} />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-2">
                    {/* ------------------ Product Name ---------------- */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Product Name*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={product.name}
                        placeholder="Product name"
                        className="input input-bordered"
                        {...register("name", { required: true })}
                      />
                      {errors?.name && (
                        <ErrorMessage message="Name is required" />
                      )}
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                      {/* ------------------ Product Category ---------------- */}
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Category*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Seller"
                          defaultValue={product.category}
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
                          defaultValue={product.price}
                          className="input input-bordered"
                          {...register("price", { required: true })}
                        />
                        {errors?.price && (
                          <ErrorMessage message="Price is required" />
                        )}
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
                        defaultValue={product.image}
                        onBlurCapture={(e) => setImageURL(e.target.value)}
                        {...register("image", { required: true })}
                      />
                      {errors?.image && (
                        <ErrorMessage message="Image URL is required" />
                      )}
                    </div>
                    {/* ------------------ Product Description---------------- */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">
                          Products Description*
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered"
                        rows={4}
                        placeholder="Products Description"
                        defaultValue={product.description}
                        {...register("description", { required: true })}
                      ></textarea>
                      {errors?.description && (
                        <ErrorMessage message="Description is required" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline">Update</button>
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};

export default UpdateProductPage;
