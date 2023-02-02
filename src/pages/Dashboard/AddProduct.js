import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addProductData from "../../redux/thunk/product/addProduct";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const product = {
      image: data.image,
      model: data.model,
      brand: data.brand,
      status: data.status === "true" ? true : false,
      price: data.price,
      rating: data.rating,
      keyFeature: [data.keyFeature1, data.keyFeature2, data.keyFeature3, data.keyFeature4],
      spec: {
        "processor": data.processor, "mobo": data.mobo, "ram": data.ram, storage: data.storage,
        "graphics": data.graphics, "casing": data.casing, "psu": data.psu, "cooler": data.cooler
      },
    };
    dispatch(addProductData(product))
  };

  return (
    <div className='flex justify-center items-center h-full py-4'>
      <form className='shadow-xl bg-white p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between' onSubmit={handleSubmit(submit)} >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'> Model </label>
          <input type='text' id='model' {...register("model")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'> Image </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'> Brand </label>
          <select name='brand' id='brand' {...register("brand")}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
          </select>
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input type='radio' id='available' value={true} {...register("status")} />
              <label className='ml-2 text-lg' htmlFor='available'> Available </label>
            </div>
            <div>
              <input type='radio' id='stockOut' name='status' value={false} {...register("status")} />
              <label className='ml-2 text-lg' htmlFor='stockOut'> Stock out </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'> Price </label>
          <input type='number' name='price' id='price' {...register("price")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='rating'> Rating </label>
            <input type='number' max="5" min="1" name='rating' id='rating' {...register("rating")} />
          </div>
        </div>

        {/* key features  */}
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature1'> Key Feature 1 </label>
          <input type='text' name='keyFeature1' id='keyFeature1' {...register("keyFeature1")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature2'> Key Feature 2 </label>
          <input type='text' name='keyFeature2' id='keyFeature2' {...register("keyFeature2")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature3'> Key Feature 3 </label>
          <input type='text' name='keyFeature3' id='keyFeature3' {...register("keyFeature3")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature4'> Key Feature 4 </label>
          <input type='text' name='keyFeature4' id='keyFeature4' {...register("keyFeature4")} />
        </div>

        {/* specs  */}
        {/* <label htmlFor="specs">Specification</label> */}
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='processor'> Processor </label>
          <input type='text' name='processor' id='processor' {...register("processor")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='mobo'> Motherboard </label>
          <input type='text' name='mobo' id='mobo' {...register("mobo")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='ram'> RAM </label>
          <input type='text' name='ram' id='ram' {...register("ram")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='graphics'> Graphics </label>
          <input type='text' name='graphics' id='graphics' {...register("graphics")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='storage'> Storage </label>
          <input type='text' name='storage' id='storage' {...register("storage")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='casing'> Casing </label>
          <input type='text' name='casing' id='casing' {...register("casing")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='psu'> Power Supply </label>
          <input type='text' name='psu' id='psu' {...register("psu")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='cooler'> Cooler </label>
          <input type='text' name='cooler' id='cooler' {...register("cooler")} />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500' type='submit' >Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
