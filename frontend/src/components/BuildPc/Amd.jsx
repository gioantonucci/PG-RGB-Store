import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/actions";
import BoxCart from "../Cart/BoxCart";

import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";

function Amd() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  
  return (
    <div className="h-full bg-gradient-to-t from-primary-300 to-primary ">
      <NavBar />
      <div>
        <BoxCart />
      </div>
      <p>Now, pick your cpu!</p>
     
      <div className="grid grid-cols-4 w-full gap-2.5 grid-rows-none relative">
      {allProducts.map((product) => {
        if(product.brand === "AMD")
        return (
          <Link to={`/products/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })}
        </div>     
    </div>
  );
}

export default Amd;
