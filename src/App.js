import "./App.css";
import { Main, FilteredProduct, SingleProduct, Login } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  // const cart = useSelector((state) => state.cart?.cart);
  // const totalAmount = useSelector((state) => state.cart?.totalAmount);
  // const totalPrice = useSelector((state) => state.cart?.totalPrice);

  // console.log("cart", cart);
  // console.log("totalAmount", totalAmount);
  // console.log("totalPrice", totalPrice);

  const user = useSelector((state) => state.auth.user);
  const { authUser } = user;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/" element={authUser ? <Main /> : <Login />} /> */}
          <Route path="/filteredProducts/:type" element={<FilteredProduct />} />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
