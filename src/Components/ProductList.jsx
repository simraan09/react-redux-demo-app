import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";

import { setProducts } from "../redux/actions/product.actions";

import Product from "./Product";

export default function ProductList() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await Axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container" style={{ marginTop: 50 }}>
      <Product />
    </div>
  );
}
