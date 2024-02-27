import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Shared from "./Components/Shared/Shared";
import Cart from "./Components/Shop/Cart";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Service/Service";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Shared />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/shop" element={<Shop />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
