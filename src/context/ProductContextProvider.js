import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import {
  ACTION_PRODUCTS,
  API_PRODUCTS,
  API_CREATE_PRODUCT,
} from "../helpers/const"; // Проверьте правильность пути и наличие констант

const productsContext = createContext();

export const useProducts = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTION_PRODUCTS.CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // Функция для получения всех продуктов
  async function getProducts() {
    try {
      let res = await axios.get(API_PRODUCTS);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.error("Ошибка при получении продуктов:", error);
      throw error;
    }
  }

  // Функция для создания нового продукта
  async function createProduct(newProduct) {
    try {
      let res = await axios.post(API_CREATE_PRODUCT, newProduct);
      dispatch({
        type: ACTION_PRODUCTS.CREATE_PRODUCT,
        payload: res.data,
      });
    } catch (error) {
      console.error("Ошибка при создании продукта:", error);
      throw error;
    }
  }

  const values = {
    getProducts,
    createProduct,
    products: state.products,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
