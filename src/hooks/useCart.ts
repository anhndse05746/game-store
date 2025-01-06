import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { addToCart } from "../store/slices/cartSlice";
import type { Product } from "../types/product.types";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addItem = (product: Product) => {
    dispatch(addToCart(product));
  };

  return { cart, addItem };
};
