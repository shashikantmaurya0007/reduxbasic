import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import setProducts from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
const ProductListng = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(products);
  const fetchproduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchproduct();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListng;
