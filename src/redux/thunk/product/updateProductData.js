const updateProductData = (_id, newData) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newData)
    })
    const data = await res.json();
    console.log(data)
  }
}

export default updateProductData;