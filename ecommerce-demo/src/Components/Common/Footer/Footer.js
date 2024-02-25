import React from "react";
// import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="flex md:grid md:grid-cols-2 sm:flex  lg:flex items-start justify-between flex-wrap p-8 bg-[#1e2f3f] text-white mt-6 gap-2 text-sm">
        <div className="footer_aboutUs flex flex-col gap-2 basis-72">
          <h3 className="font-bold text-lg">ABOUT US</h3>
          <ul>
            <li>
              AXUM ONLNE SHOP YOUR ONE-STOP DESTI- NATION FOR CURATED COLLETIONS
              OF TOP- TIER PRODUCTS, FROM FASHION TO TECH GADGETS, CONVE-
              NIENTLY ACCESSIBLE AT YOUR FINGERTIPS.
            </li>
          </ul>
        </div>

        <div className="footer__linkUseful flex flex-col gap-2">
          <h3 className="font-bold text-lg">FAQ</h3>
          <ol className="hover:*:underline leading-5 list-decimal">
            <li>
              <a href="#">HOW CAN I PLACE AN ORDER?</a>
            </li>
            <li>
              <a href="#">WHAT PAYMENT METHODS DO YOU ACCEPT?</a>
            </li>
            <li>
              <a href="#">HOW CAN I TRACK MY ORDER?</a>
            </li>
            <li>
              <a href="#">WHAT IS YOUR RETURN POLICY?</a>
            </li>
            <li>
              <a href="#">DO YOU OFFER INTERNATIONAL SHIPPING?</a>
            </li>
          </ol>
        </div>
        <div className="footer__linkContact flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <ul>
            <li>P.NO : 0091234561</li>
            <li>FAX : +1-907-555-1234</li>
            <li>EMAIL : AXUM@GMAIL.COM </li>
          </ul>
        </div>
      </footer>
      <div className="terms flex justify-between px-4 bg-gray-200">
        <span>© Axum Shoping 2024. All rights reserved.</span>
        <span className="hover:underline">
          <a href="#">Terms· Privacy Policy</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
