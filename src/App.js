import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import SingleProductPage from "./pages/SingleProduct/SingleProductPage";
import PayPage from "./pages/Pay/PayPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Category />
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />
        <Route path="/paypage" element={<PayPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
