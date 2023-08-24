import moment from "moment/moment";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const navOption = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/#",
      name: "About us",
    },
    {
      path: "/#",
      name: "Terms and condition",
    },
  ];
  return (
    <footer className="bg-slate-950 text-white">
      <div className="p-10 text-white text-center md:text-left grid grid-cols-1 md:grid-cols-2 space-y-5 lg:grid-cols-4 justify-between">
        {/* ------ logo and contract info */}
        <div className="w-full md:col-span-2 flex flex-col justify-center items-start mx-auto md:mx-0 gap-3">
          <div className="flex items-center gap-3 uppercase">
            <img src="/icon.png" className="w-10 h-10" alt="" />
            <h1 className="text-2xl font-bold">Repliq Commerce</h1>
          </div>
          <div className="text-start">
            <p className="flex gap-1 items-center">
              <FaLocationDot /> Level-4, 34, Banani, Dhaka
            </p>
            <p className="flex gap-1 items-center">
              <FaEnvelope /> info@repliq-commerce.com
            </p>
            <p className="flex gap-1 items-center">
              <FaPhone /> +8801512121212 , +8801512121212
            </p>
          </div>
        </div>
        {/* ----------  navigation ----------- */}
        <div className="flex flex-col">
          {navOption.map((item, idx) => (
            <Link key={idx} to={item.path} className="link link-hover">
              {item.name}
            </Link>
          ))}
        </div>
        {/* --------- social -------------- */}
        <div>
          <h2 className="text-xl">Follow us</h2>
          <div className="text-3xl mt-5 flex gap-5 justify-center md:justify-start">
            <p>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* ----------  copyright --------- */}
      <div className="footer footer-center p-4 border-t">
        <p>Copyright © {moment().format("YYYY")} - REPLIQ COMMERCE</p>
      </div>
    </footer>
  );
};

export default Footer;
