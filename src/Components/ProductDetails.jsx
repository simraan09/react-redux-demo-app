import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/product.actions";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { productId } = useParams();

  const { id, title, image } = product;

  const fetchProductDetails = async () => {
    try {
      const response = await Axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== 0) fetchProductDetails();
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: 400, height: 400 }} />
    </div>
  );
}
