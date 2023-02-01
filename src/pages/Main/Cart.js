import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  return (<>
    {!cart.length && <p className="py-10 text-bold text-lg text-center text-pink-500">No items found on Cart</p>}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {cart
        .sort((a, b) => b.order - a.order)
        .map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  </>
  );
};

export default Cart;
