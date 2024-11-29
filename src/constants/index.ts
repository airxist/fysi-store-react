import accessories from "../assets/icons/accessories.png";
import arrow from "../assets/icons/arrow.png";
import upload from "../assets/icons/upload.png";
import google from "../assets/icons/google.png";
import avatar from "../assets/icons/avatar.png";
import avatar2 from "../assets/icons/avatar2.png";
import bag from "../assets/icons/bag.png";
import call from "../assets/icons/call.png";
import care from "../assets/icons/care.png";
import cart from "../assets/icons/cart.png";
import cartWhite from "../assets/icons/cart-white.png";
import cert from "../assets/icons/cert.png";
import cloth from "../assets/icons/cloth.png";
import direction from "../assets/icons/direction.png";
import doneCorrect from "../assets/icons/doneCorrect.png";
import facebook from "../assets/icons/facebook.png";
import funnel from "../assets/icons/funnel.png";
import heart from "../assets/icons/heart.png";
import heartWhite from "../assets/icons/heart-white.png";
import history from "../assets/icons/history.png";
import house from "../assets/icons/house.png";
import instagram from "../assets/icons/instagram.png";
import leaf from "../assets/icons/leaf.png";
import logout from "../assets/icons/logout.png";
import makeup from "../assets/icons/makeup.png";
import menu from "../assets/icons/menu.png";
import noResult from "../assets/icons/no-result.png";
import note from "../assets/icons/note.png";
import outdoor from "../assets/icons/outdoor.png";
import pack from "../assets/icons/pack.png";
import pencil from "../assets/icons/pencil.png";
import plus from "../assets/icons/plus.png";
import pot from "../assets/icons/pot.png";
import search from "../assets/icons/search.png";
import settings from "../assets/icons/settings.png";
import sms from "../assets/icons/sms.png";
import supplies from "../assets/icons/supplies.png";
import tick from "../assets/icons/tick.png";
import twitter from "../assets/icons/twitter.png";
import user from "../assets/icons/user.png";
import van from "../assets/icons/van.png";
import x from "../assets/icons/close-circle.png";
import bagWhite from "../assets/icons/bag-white.png";

import home_hero_bg from "../assets/images/home_bg.jpg";
import palm from "../assets/images/palm.png";
import notFound from "../assets/images/not-found.png";

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

import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";
import about4 from "../assets/images/about4.png";
import about5 from "../assets/images/about5.png";

import eco_contact from "../assets/images/eco-friendly.png";

import conboard1 from "../assets/images/conboard1.jpg";
import conboard2 from "../assets/images/conboard2.jpg";
import conboard3 from "../assets/images/conboard3.jpg";
import venboard1 from "../assets/images/venboard1.png";
import venboard2 from "../assets/images/venboard2.png";
import venboard3 from "../assets/images/venboard3.png";

export const icons = {
  avatar2, upload,
  bagWhite,
  pencil,
  settings,
  logout,
  accessories,
  arrow,
  avatar,
  bag,
  call,
  care,
  cart,
  cartWhite,
  cert,
  x,
  cloth,
  direction,
  facebook,
  funnel,
  heart,
  heartWhite,
  history,
  house,
  instagram,
  leaf,
  makeup,
  menu,
  noResult,
  note,
  outdoor,
  pack,
  plus,
  pot,
  search,
  sms,
  supplies,
  tick,
  twitter,
  user,
  van,
  google,
  doneCorrect,
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
  about1,
  about2,
  about3,
  about4,
  about5,
  notFound,
  eco_contact,
  conboard1,
  conboard2,
  conboard3,
  venboard1,
  venboard2,
  venboard3,
};

export const horizontalNav: {
  title: string;
  icon?: string;
  dataContainerStyle?: string;
  data: { title: string; icon?: string; href?: string }[];
}[] = [
  {
    title: "Catalogue",
    icon: icons.arrow,
    dataContainerStyle: "py-6 px-10 w-[476px]",
    data: [
      { title: "Clothing", icon: icons.cloth, href: "/catalogue/Clothing" },
      {
        title: "Kitchen Items",
        icon: icons.pot,
        href: "/catalogue/Kitchen Items",
      },
      {
        title: "Personal Care",
        icon: icons.care,
        href: "/catalogue/Personal Care",
      },
      {
        title: "Office Supplies",
        icon: icons.supplies,
        href: "/catalogue/Office Supplies",
      },
      {
        title: "House Hold Items",
        icon: icons.house,
        href: "/catalogue/House hold",
      },
      {
        title: "Beauty & Cosmetics",
        icon: icons.makeup,
        href: "/catalogue/Beauty",
      },
      {
        title: "Outdoor & Travel",
        icon: icons.outdoor,
        href: "/catalogue/Outdoor",
      },
      {
        title: "Accessories",
        icon: icons.accessories,
        href: "/catalogue/Accessories",
      },
    ],
  },
  {
    title: "About Us",
    dataContainerStyle: "py-[18px] px-[30px] w-[194px]",
    data: [
      { title: "Contact", href: "/support/contact" },
      { title: "About", href: "/about" },
      { title: "X" },
      { title: "Instagram" },
      { title: "Facebook" },
    ],
  },
  {
    title: "Support",
    dataContainerStyle: "py-5 pl-4 w-[153px]",
    data: [
      { title: "FAQ", href: "/support/faq" },
      { title: "Help Center" },
      { title: "Report a Product", href: "/support/report" },
      { title: "Returns", href: "/support" },
    ],
  },
];

export const mobileHorizontalNav = [
  {
    title: "",
    data: [
      { icon: icons.user, title: "My Account", href: "/customer/management" },
      {
        icon: icons.history,
        title: "Order History",
        href: "/customer/management/order-history",
      },
      { icon: icons.sms, title: "Inbox", href: "/customer/management/inbox" },
      {
        icon: icons.pencil,
        title: "Reviews",
        href: "/customer/management/reviews",
      },
      {
        icon: icons.settings,
        title: "Settings",
        href: "/customer/management/settings",
      },
      { icon: icons.logout, title: "Log Out", href: "/customer/management" },
    ],
  },

  {
    title: "Catalogue",
    icon: icons.arrow,
    dataContainerStyle: "py-6 px-10 w-[476px]",
    data: [
      { title: "Clothing", icon: icons.cloth, href: "/catalogue/Clothing" },
      {
        title: "Kitchen Items",
        icon: icons.pot,
        href: "/catalogue/Kitchen Items",
      },
      {
        title: "Personal Care",
        icon: icons.care,
        href: "/catalogue/Personal Care",
      },
      {
        title: "Office Supplies",
        icon: icons.supplies,
        href: "/catalogue/Office Supplies",
      },
      {
        title: "House Hold Items",
        icon: icons.house,
        href: "/catalogue/House hold",
      },
      {
        title: "Beauty & Cosmetics",
        icon: icons.makeup,
        href: "/catalogue/Beauty",
      },
      {
        title: "Outdoor & Travel",
        icon: icons.outdoor,
        href: "/catalogue/Outdoor",
      },
      {
        title: "Accessories",
        icon: icons.accessories,
        href: "/catalogue/Accessories",
      },
    ],
  },
  {
    title: "",
    data: [
      { icon: icons.user, title: "Sell on Fysi", href: "/onboarding/vendor" },
      {
        icon: icons.history,
        title: "About Us",
        href: "/about",
      },
      {
        icon: icons.pencil,
        title: "Support",
        href: "/support",
      },
      {
        icon: icons.settings,
        title: "Contact",
        href: "/customer/management/settings",
      },
    ],
  },
];

export const callToAction = [
  { title: "Sign Up", href: "/onboarding" },
  { title: "WishList", icon: icons.heart, href: "/wishes" },
  { title: "Cart", icon: icons.cart, href: "/cart" },
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
  { productImage: images.demand1, id: 1 },
  { productImage: images.demand2, id: 2 },
  { productImage: images.demand3, id: 3 },
  { productImage: images.demand4, id: 4 },
  { productImage: images.demand5, id: 5 },
];

export const MENU_DROPDOWN = [
  { title: "Contact" },
  { title: "X" },
  { title: "Instagram" },
  { title: "Facebook" },
  { title: "Report a Product" },
  { title: "Returns & Refund" },
];
export const SUPPORT_DROPDOWN = [{ title: "Faqs" }, { title: "Help Center" }];

export const PRODUCTS: ProductStoreProps = {
  accessories: [
    {
      id: 1,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories1,
    },
    {
      id: 2,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories2,
    },
    {
      id: 3,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories3,
    },
    {
      id: 4,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories4,
    },
    {
      id: 5,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories5,
    },
    {
      id: 6,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories6,
    },
    {
      id: 7,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories7,
    },
    {
      id: 8,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories8,
    },
    {
      id: 9,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories9,
    },
    {
      id: 10,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories10,
    },
    {
      id: 11,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories11,
    },
    {
      id: 12,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "accessories",
      productImage: accessories12,
    },
  ],
  clothing: [
    {
      id: 1,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories1,
    },
    {
      id: 2,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories2,
    },
    {
      id: 3,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories3,
    },
    {
      id: 4,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories4,
    },
    {
      id: 5,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories5,
    },
    {
      id: 6,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories6,
    },
    {
      id: 7,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories7,
    },
    {
      id: 8,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories8,
    },
    {
      id: 9,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories9,
    },
    {
      id: 10,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories10,
    },
    {
      id: 11,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories11,
    },
    {
      id: 12,
      rating: 3,
      reviews: 2,
      productName: "Bamboo Stick",
      price: 2000,
      serialId: "28AFX99",
      description: "Light Up Your Life sustainability, with our bamboos stick",
      features: ["Non Toxic", "Sustainable", "Biodegradable"],
      category: "clothing",
      productImage: accessories12,
    },
  ],
};

export const customerReviews = [
  {
    image: icons.avatar,
    reviewMessage:
      "Fantastic product! Exceeded my expectations and the quality is top-notch. Highly recommend.",
    rating: 5,
    time: "2024-11-15T10:30:00Z",
  },
  {
    image: icons.avatar,
    reviewMessage:
      "Good value for the price. There are a few minor issues, but overall it's a solid choice.",
    rating: 4,
    time: "2024-11-14T08:45:00Z",
  },
  {
    image: icons.avatar,
    reviewMessage:
      "Not very impressed. The product didn't work as advertised and customer service wasn't helpful.",
    rating: 2,
    time: "2024-11-13T14:20:00Z",
  },
  {
    image: icons.avatar,
    reviewMessage:
      "Decent product but took too long to arrive. Packaging was also damaged.",
    rating: 3,
    time: "2024-11-12T12:10:00Z",
  },
  {
    image: icons.avatar,
    reviewMessage:
      "Absolutely love it! Great design and very user-friendly. Would definitely buy again.",
    rating: 5,
    time: "2024-11-11T09:50:00Z",
  },
];

export const aboutData = [
  {
    title: "About Us",
    description:
      "Welcome to Fysi, your go-to marketplace for eco-friendly products that help you live a more sustainable lifestyle. At Fysi, we believe in the power of nature and the importance of making conscious choices that benefit both you and the planet.",
    imageUrl: images.about1,
  },
  {
    title: "Our Mission",
    description:
      "We are committed to connecting eco-conscious customers with vendors who share our passion for sustainability. Our mission is to make it easy for you to find and purchase products that are not only good for you but also good for the environment. Every item on our platform is carefully vetted and certified to meet our high standards of eco-friendliness.",
    imageUrl: images.about2,
    order: true,
  },
  {
    title: "Our Vendors",
    description:
      "We partner with a diverse range of vendors who are dedicated to creating high-quality, sustainable products. From organic cotton clothing to handcrafted bamboo items, our vendors are at the forefront of the green movement. They are passionate about what they do, and we are proud to support them in their mission to make a positive impact on the world.",
    imageUrl: images.about3,
  },
  {
    title: "Eco-Certification",
    description:
      "At Fysi, we take sustainability seriously. That's why we have developed a rigorous eco-certification process to ensure that every product on our platform meets our strict criteria for environmental responsibility. When you shop with us, you can trust that you are making a choice that aligns with your values.",
    imageUrl: images.about4,
    order: true,
  },
  {
    title: "Why Fysi?",
    reasons: [
      {
        title: "Sustainaiblity",
        description:
          "Every product is eco-certified, ensuring you make responsible choices.",
      },
      {
        title: "Quality",
        description:
          "Our vendors are selected for their commitment to high standards and sustainable practices.",
      },
      {
        title: "Convenience",
        description:
          "Shop from a wide range of eco-friendly products, all in one place.",
      },
    ],
    imageUrl: images.about5,
  },
];

export const returnsData = [
  {
    title: "Returns & Refunds",
    description:
      "At Fysi, we want you to be completely satisfied with your purchase. If for any reason you are not, our Returns and Refunds policy is here to help.",
  },
  {
    title: "Easy Returns",
    description:
      "If you wish to return an item, you can do so within 14 days of receiving your order. Please ensure that the product is unused, in its original packaging, and in the same condition you received it.",
  },
  {
    title: "How to initiate a Return",
    description:
      "If you wish to return an item, you can do so within 14 days of receiving your order. Please ensure that the product is unused, in its original packaging, and in the same condition you received it.",
    procedure: [
      "Contact Us: Start by reaching out to our customer support team through our contact form or email.",
      "Receive Return Instructions: We’ll guide you through the return process, including how to ship the item back to us.",
      "Ship the Item: Pack the item securely and send it to the address provided by our team.",
    ],
  },
  {
    title: "Refund Process",
    description:
      "If you wish to return an item, you can do so within 14 days of receiving your order. Please ensure that the product is unused, in its original packaging, and in the same condition you received it.",
  },
  {
    title: "Exceptions",
    description:
      "Certain items, such as perishable goods or personalized products, may not be eligible for return. Please check the product description for specific return eligibility.",
  },
  {
    title: "Exchanges",
    description:
      "If you received a defective or damaged item, we're happy to offer a replacement. Contact us within 7 days of receiving your order, and we'll arrange an exchange.",
  },
  {
    title: "Need Assistance ?",
    description:
      "If you have any questions or need help with your return, our customer support team is here for you. Reach out anytime, and we'll be glad to assist you!",
  },
];

export const onboardingPhotos = {
  customer: [images.conboard1, images.conboard2, images.conboard3],
  vendor: [images.venboard1, images.venboard2, images.venboard3],
};

export const customerNav = [
  { icon: icons.user, title: "My Account", href: "/customer/management" },
  {
    icon: icons.history,
    title: "Order History",
    href: "/customer/management/order-history",
  },
  { icon: icons.sms, title: "Inbox", href: "/customer/management/inbox" },
  {
    icon: icons.pencil,
    title: "Reviews",
    href: "/customer/management/reviews",
  },
  {
    icon: icons.settings,
    title: "Settings",
    href: "/customer/management/settings",
  },
  { icon: icons.logout, title: "Log Out", href: "/customer/management" },
];

export const messages = [
  {
    date: "13 July",
    title: "How was your Experience?",
    message:
      'Thank you for shopping with us! We hope you were happy with your item(s). Our customers rely on reviews from insightful customers such as yourself to decide which of our products is best for them. We would love to hear your feedback on the seller and item, please click on the "Pending Reviews" section to share. Thank you for shopping on Fysi!',
  },
  {
    date: "11 July",
    title: "Package delivered!",
    message:
      "Package# DS-EAC-1146354782-3724 is delivered. You can rate your product to let other people know about it. Not happy? You can return it within 7 days from now! Thank you for shopping on Fysi!",
    productImage: images.accessories1,
    productName: "Accessories",
  },
];

export const resolution = ["full refund", "replacement", "exchange", "repair"];

export const issueType = [
  "Damaged Product",
  "Incorrect Item Received",
  "Item Not as Described",
  "Defective Product",
  "Poor Quality",
  "Size/Color Mismatch",
  "Missing Parts",
];

export const dummyCustomer = {
  name: "DeeDee",
  profilePhoto: icons.avatar,
  email: "DeeDee@gmail.com",
  address: "50 togo street victoria island Lagos, Nigeria",
  phone: "0907878787878",
};
