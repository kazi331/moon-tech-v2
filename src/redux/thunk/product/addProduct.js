import { addProduct } from "../../actions/productAction";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch('http://localhost:5000/product', {
      method: "POST",
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' }
    })
    // console.log({ res })
    const data = await res.json();
    if (data) {
     dispatch( addProduct({...product, _id: data._id}));
      console.log(data)
    }
  }
}

export default addProductData;

