import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Shared from "./Components/Shared/Shared";
import Cart from "./Components/Shop/Cart";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Service/Service";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Admin from "./Components/Pages/admin/Admin";
import Dashboard from "./Components/Pages/admin/Dashboard";
import Product from "./Components/Pages/admin/Product";
import User from "./Components/Pages/admin/user/User";
import Deals from "./Components/Pages/admin/deals/Deals";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Shared />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />{" "}
          <Route path="/cart" element={<Cart />} />
        </Route>{" "}
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="users" element={<User />} />
          <Route path="deals" element={<Deals />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
