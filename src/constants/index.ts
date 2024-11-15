import call from "../assets/icons/call.png";
import bag from "../assets/icons/bag.png";
import menu from "../assets/icons/menu.png";
import search from "../assets/icons/search.png";
import arrow from "../assets/icons/arrow.png";
import heart from "../assets/icons/heart.png";
import cart from "../assets/icons/cart.png";
import sms from "../assets/icons/sms.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import pack from "../assets/icons/pack.png";
import van from "../assets/icons/van.png";
import leaf from "../assets/icons/leaf.png";
import cert from "../assets/icons/cert.png";
import note from "../assets/icons/note.png";
import pot from "../assets/icons/pot.png";
import cloth from "../assets/icons/cloth.png";
import care from "../assets/icons/care.png";
import supplies from "../assets/icons/supplies.png";
import house from "../assets/icons/house.png";
import makeup from "../assets/icons/makeup.png";
import outdoor from "../assets/icons/outdoor.png";
import accessories from "../assets/icons/accessories.png";
import history from "../assets/icons/history.png";
import user from "../assets/icons/user.png";
import funnel from "../assets/icons/funnel.png";

import home_hero_bg from "../assets/images/home_bg.jpg";
import palm from "../assets/images/palm.png";

import category1 from "../assets/images/accessories.png";
import category2 from "../assets/images/clothing.png";
import category3 from "../assets/images/house-hold.png";

import demand1 from "../assets/images/demand.jpg";
import demand2 from "../assets/images/demand2.jpg";
import demand3 from "../assets/images/demand3.jpg";
import demand4 from "../assets/images/demand4.jpg";
import demand5 from "../assets/images/demand5.jpg";

import sustain1 from "../assets/images/sustain1.png";
import sustain2 from "../assets/images/sustain2.png";
import sustain3 from "../assets/images/sustain3.png";
import sustain4 from "../assets/images/sustain4.png";

import accessories1 from "../assets/images/accessories1.png";
import accessories2 from "../assets/images/accessories2.png";
import accessories3 from "../assets/images/accessories3.png";
import accessories4 from "../assets/images/accessories4.png";
import accessories5 from "../assets/images/accessories5.png";
import accessories6 from "../assets/images/accessories6.png";
import accessories7 from "../assets/images/accessories7.png";
import accessories8 from "../assets/images/accessories8.png";
import accessories9 from "../assets/images/accessories9.png";
import accessories10 from "../assets/images/accessories10.png";
import accessories11 from "../assets/images/accessories11.png";
import accessories12 from "../assets/images/accessories12.png";

export const icons = {
  call,
  bag,
  menu,
  search,
  arrow,
  heart,
  cart,
  sms,
  instagram,
  facebook,
  twitter,
  pack,
  leaf,
  cert,
  note,
  van,
  cloth,
  pot,
  care,
  supplies,
  house,
  makeup,
  outdoor,
  accessories,
  history,
  user,
  funnel,
};

export const images = {
  home_hero_bg,
  category1,
  category2,
  category3,
  demand1,
  demand2,
  demand3,
  demand4,
  demand5,
  sustain1,
  sustain2,
  sustain3,
  sustain4,
  palm,
  accessories1,
  accessories2,
  accessories3,
  accessories4,
  accessories5,
  accessories6,
  accessories7,
  accessories8,
  accessories9,
  accessories10,
  accessories11,
  accessories12,
};

export const horizontalNav = [
  {
    title: "Catalogue",
    icon: icons.arrow,
    dataContainerStyle: "py-6 px-10 w-[476px]",
    data: [
      { title: "Clothing", icon: icons.cloth, href: "/Clothing" },
      { title: "Kitchen Items", icon: icons.pot, href: "/Kitchen Items" },
      { title: "Personal Care", icon: icons.care, href: "/Personal Care" },
      {
        title: "Office Supplies",
        icon: icons.supplies,
        href: "/Office Supplies",
      },
      { title: "House Hold Items", icon: icons.house, href: "/House hold" },
      { title: "Beauty & Cosmetics", icon: icons.makeup, href: "/Beauty" },
      { title: "Outdoor & Travel", icon: icons.outdoor, href: "/Outdoor" },
      { title: "Accessories", icon: icons.accessories, href: "/Accessories" },
    ],
  },
  {
    title: "About Us",
    dataContainerStyle: "py-[18px] px-[30px] w-[194px]",
    data: [
      { title: "Contact" },
      { title: "X" },
      { title: "Instagram" },
      { title: "Facebook" },
    ],
  },
  {
    title: "Support",
    dataContainerStyle: "py-5 pl-4 w-[153px]",
    data: [
      { title: "FAQ" },
      { title: "Help Center" },
      { title: "Report a Product" },
      { title: "Returns" },
    ],
  },
];

export const callToAction = [
  { title: "Sign Up" },
  { title: "WishList", icon: icons.heart },
  { title: "Cart", icon: icons.cart },
];

export const landing_page_hero = {
  title: "Eco - Products, Made for You",
  desc: "Shop Smart, Live Green",
};

export const services = [
  {
    icon: icons.leaf,

    title: "Eco Friendly Products",
  },
  {
    icon: icons.pack,
    title: "Eco Packaging",
  },
  {
    icon: icons.van,
    title: "Fastest Delivery",
  },
  {
    icon: icons.cert,
    title: "Certified vendors and products",
  },
];

export const SUSTAIN_IMAGES = [sustain1, sustain2, sustain3, sustain4];

export const FOOTER_LINKS = [
  {
    label: "Catalogue",
    data: [],
    media: "small",
    component: "text",
  },
  {
    label: "Account",
    data: [
      { title: "Order history" },
      { title: "Profile" },
      { title: "Wishlist" },
      { title: "Payment" },
    ],
    media: "small",
    component: "text",
  },
  {
    label: "About Us",
    data: [],
    media: "small",
    component: "text",
  },
  {
    label: "Categories",
    data: [
      { title: "Clothing" },
      { title: "Kitchen Items" },
      { title: "Personal Care" },
      { title: "Beauty and Cosmetics" },
      { title: "Accessories" },
      { title: "Outdoor & Travels" },
    ],
    media: "big",
    component: "text",
  },
  {
    label: "Useful Links",
    data: [
      { title: "Returns and refunds" },
      { title: "Report a product" },
      { title: "Sell on Fysi" },
    ],
    media: "big",
    component: "text",
  },
  {
    label: "Company",
    data: [{ title: "About Us" }, { title: "Our Blog" }],
    media: "big",
    component: "text",
  },
  {
    label: "Support",
    data: [
      { title: "Faqs" },
      { title: "Help Center" },
      { title: "Support Us" },
    ],
    component: "text",
  },
  {
    label: "Join Us",
    data: [
      { icon: icons.facebook },
      { icon: icons.twitter },
      { icon: icons.instagram },
    ],
    component: "social",
    listContainerStyle: "mt-4 flex items-center gap-x-2",
  },
];

export const TERMS_AND_CONDITION = [
  "Terms and condition",
  "Privacy Policy",
  "Legal Notice",
];

export const CATEGORIES = [
  { title: "House Hold Items", productImage: category1 },
  { title: "Clothing", productImage: category2 },
  { title: "Personal Care", productImage: category3 },
];

export const PRODUCT_ON_DEMAND = [
  { productImage: images.demand1 },
  { productImage: images.demand2 },
  { productImage: images.demand3 },
  { productImage: images.demand4 },
  { productImage: images.demand5 },
];

// export const HOT_DEALS = [
//   { imageUrl: hot1 },
//   { imageUrl: hot2 },
//   { imageUrl: hot3 },
//   { imageUrl: hot4 },
//   { imageUrl: hot5 },
// ];

// export const NEW_IN = [
//   { imageUrl: new1 },
//   { imageUrl: new2 },
//   { imageUrl: new3 },
//   { imageUrl: new4 },
//   { imageUrl: new5 },
// ];

export const MENU_DROPDOWN = [
  { title: "Contact" },
  { title: "X" },
  { title: "Instagram" },
  { title: "Facebook" },
  { title: "Report a Product" },
  { title: "Returns & Refund" },
];
export const SUPPORT_DROPDOWN = [{ title: "Faqs" }, { title: "Help Center" }];

export const PRODUCTS = {
  accessories: [
    { productImage: accessories1 },
    { productImage: accessories2 },
    { productImage: accessories3 },
    { productImage: accessories4 },
    { productImage: accessories5 },
    { productImage: accessories6 },
    { productImage: accessories7 },
    { productImage: accessories8 },
    { productImage: accessories9 },
    { productImage: accessories10 },
    { productImage: accessories11 },
    { productImage: accessories12 },
  ],
};
