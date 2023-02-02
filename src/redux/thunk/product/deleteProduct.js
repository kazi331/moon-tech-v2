import { removeProduct } from "../../actions/productAction";

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, { method: 'DELETE' })
    const data = await res.json();
    if (data.deletedCount) {
      console.log(data)
      dispatch(removeProduct(id))
    }
  }
}

export default deleteProduct;