import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Common/Header/Header";
import { useLocation } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
const Shared = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1] || null;
  console.log(title, "title");
  return (
    <>
      <Header />
      {!(title === "signup" || title === "signin") && <Banner title={title} />}
      <Outlet context={{ title: "shop" }} />
      <Footer />
    </>
  );
};

export default Shared;
