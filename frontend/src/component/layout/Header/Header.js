import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/x.png";

const options = {
  burgerSize: "1px",
  burgerColor: "white",
  burgerColorHover: "#FF008A",
  logo,
  logoWidth: "20vmax",
  navColor1: "black",
  logoHoverSize: "10px",
  logoHoverColor: "#FF008A",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#E6E6FA",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#FF008A",
  link1Margin: "1vmax",
  profileIcon: true,
  profileIconColor: "#E6E6FA",
  ProfileIconElement: MdAccountCircle,
  searchIcon: true,
  searchIconColor: "#E6E6FA",
  SearchIconElement: MdSearch,
  cartIcon: true,
  cartIconColor: "#E6E6FA",
  CartIconElement: MdAddShoppingCart,
  profileIconUrl: "/login",
  profileIconColorHover: "#FF008A",
  searchIconColorHover: "#FF008A",
  cartIconColorHover: "#FF008A",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
