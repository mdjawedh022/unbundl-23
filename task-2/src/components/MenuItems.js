import { AiTwotoneHome, AiFillInfoCircle } from "react-icons/ai";
import { PiAddressBookFill } from "react-icons/pi";
import { BiSolidBriefcase } from "react-icons/bi";
export const MenuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
    cName: "nav-link",
    icons: <AiTwotoneHome className="icon" />,
  },

  {
    id: 2,
    title: "Service",
    url: "/service",
    cName: "nav-link",
    icons: <BiSolidBriefcase className="icon" />,
  },
  {
    id: 3,
    title: "Sign Up",
    url: "/",
    cName: "button-signup",
    icons: "",
  },
];
