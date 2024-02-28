import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Common/Header/Header";
import { useLocation } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import NewsLetter from "../Common/NewsLetter/NewsLetter";
import TimeCounter from "../TimeCounter/TimeCounter";
import CarouselSlide from "../Carousel/Carousel";
const Shared = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1] || null;
  return (
    <>
      <Header />
      {!(title === "signup" || title === "signin") && <Banner title={title} />}
      <Outlet context={{ title: "shop" }} />
      {!(
        title === "signup" ||
        title === "signin" ||
        title === "cart" ||
        title === "about" ||
        title === "services"
      ) && (
        <>
          <TimeCounter />
          <CarouselSlide />
        </>
      )}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Shared;
