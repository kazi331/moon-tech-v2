import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { TOGGLE_BRAND, TOGGLE_STOCK } from "../../redux/actionTypes/actionTypes";
import loadProductData from "../../redux/thunk/loadProduct/loadProduct";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product)
  const { filter } = useSelector(state => state.filter)
  const { brand, stock } = filter;

  useEffect(() => {
    // fetch("http://localhost:5000/products")
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: LOAD_PRODUCT, payload: data }));
    dispatch(loadProductData())
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";



  let content = products.length && products.map((product) => <ProductCard key={product.model} product={product} />);
  // filter content with brand and stock

  if (products.length && (stock || brand.length)) {
    content = products
      .filter(product => stock ? product.status === true : product) // ternary
      .filter(product => {
        if (brand.length) {
          return brand.includes(product.brand)
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }


  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button className={`border px-3 py-2 rounded-full font-semibold ${stock && activeClass} `} onClick={() => dispatch({ type: TOGGLE_STOCK })}>In Stock</button>
        <button className={`border px-3 py-2 rounded-full font-semibold ${brand.includes('amd') && activeClass}`} onClick={() => dispatch({ type: TOGGLE_BRAND, payload: 'amd' })}> AMD</button>
        <button className={`border px-3 py-2 rounded-full font-semibold ${brand.includes('intel') && activeClass} `} onClick={() => dispatch({ type: TOGGLE_BRAND, payload: 'intel' })}> Intel</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14'>
        {products.length ? content : <p className="py-10 text-bold text-lg text-center text-pink-500">No items found</p>}
      </div>
    </div>
  );
};

export default Home;
