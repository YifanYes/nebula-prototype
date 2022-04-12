import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WishlistContext = createContext();

const WishlistContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItem = (id, product_name, price, image) => {
    setItems([...items, {id, product_name, price, image}]);
    toast(`El producto "${product_name}" se ha añadido a tu wishlist`, 
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark'
      }
    );
  };
  const removeItem = (id, product_name) => {
    setItems(items.filter(item => item.id != id));
    toast(`El producto "${product_name}" ha sido eliminado de tu wishlist`, 
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark'
      }
    );
  }
  console.log(items);
  return (
    <WishlistContext.Provider value={{items, addItem, removeItem}}>
      <ToastContainer/>
      {props.children}
    </WishlistContext.Provider>
  );
}

export const useWishlistContext = () => useContext(WishlistContext);

export default WishlistContextProvider;