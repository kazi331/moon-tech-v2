import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import updateProductData from "../../redux/thunk/product/updateProductData";

const EditProduct = () => {
  const [product, setProduct] = useState({})
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const _id = useLocation().search.split('=')[1];
  useEffect(() => {
    const loadProduct = async () => {
      const res = await fetch(`http://localhost:5000/product/${_id}`)
      const data = await res.json();
      setProduct(data)
    }
    loadProduct();
  }, [_id, dispatch])
  console.log(product)

  const keys = [...Array(4).keys()]
  const spec = [
    { id: "casing", name: "Casing" },
    { id: "cooler", name: "Cooler" },
    { id: "graphics", name: "Graphics" },
    { id: "mobo", name: "Motherboard" },
    { id: "processor", name: "Processor" },
    { id: "psu", name: "Poweresupply" },
    { id: "ram", name: "RAM" },
    { id: "storage", name: "Storage" }
  ]
  if (typeof product.keyFeature === "undefined") {
    return 'Loading...'
  }

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
        "processor": data.processor, "mobo": data.mobo, "ram": data.ram, "storage": data.storage,
        "graphics": data.graphics, "casing": data.casing, "psu": data.psu, "cooler": data.cooler
      },
    };
    console.log(product)
    dispatch(updateProductData(_id, product))
  };


  // if(product?.keyFeature[0] === undefined){
  //   return 'none'
  // }

  return (
    <div className='flex justify-center items-center h-full py-4'>
      <form className='shadow-xl bg-white p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between' onSubmit={handleSubmit(submit)} >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'> Model </label>
          <input defaultValue={product?.model} type='text' id='model' {...register("model")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'> Image </label>
          <input defaultValue={product?.image} type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'> Brand </label>
          <select name='brand' id='brand' {...register("brand")}>
            <option selected={product.brand === 'amd'} value='amd'>AMD</option>
            <option selected={product.brand === 'intel'} value='intel'>Intel</option>
          </select>
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input defaultChecked={product.status} type='radio' id='available' value={true} {...register("status")} />
              <label className='ml-2 text-lg' htmlFor='available'> Available </label>
            </div>
            <div>
              <input defaultChecked={!product.status} type='radio' id='stockOut' name='status' value={false} {...register("status")} />
              <label className='ml-2 text-lg' htmlFor='stockOut'> Stock out </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'> Price </label>
          <input defaultValue={product?.price} type='number' name='price' id='price' {...register("price")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='rating'> Rating </label>
            <input defaultValue={product?.rating} type='number' max="5" min="1" name='rating' id='rating' {...register("rating")} />
          </div>
        </div>

        {/* key features  */}
        {
          keys.map(item => <div key={item} className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor={`keyFeature3${item}`}>
              Key Feature {item + 1}
            </label>
            <input type='text' name={`keyFeature3${item}`}
              id={`keyFeature3${item}`}
              defaultValue={product?.keyFeature[item]}
              {...register(`keyFeature${item + 1}`)} />
          </div>
          )
        }


        {/* complex map method for same component */}
        {
          spec?.map(item => <div key={item.id} className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor={item.id}> {item.name} </label>
            <input type='text'
              name={item.id} id={item.id}
              defaultValue={product.spec[item.id]}
              {...register(item.id)} />
          </div>)
        }

        <div className='flex justify-between items-center w-full'>
          <button className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500' type='submit' >Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
