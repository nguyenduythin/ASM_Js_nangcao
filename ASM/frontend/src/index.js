//client
import Home from "./website/Home.js";
import Shop from "./website/Shop.js";
import Blog from "./website/Blog.js";
import Contact from "./website/Contact.js";
import ShopDetails from "./website/ShopDetails.js";
import BlogDetails from "./website/BlogDetails.js";
import ShopCart from "./website/ShopCart.js";
import Checkout from "./website/Checkout.js";

//client

//admin
import HomeAdmin from "./admin/HomeAdmin.js";
import UserAdmin from "./admin/UserAdmin.js";
import AddUserAdmin from "./admin/AddUserAdmin.js";
import EditUserAdmin from "./admin/EditUserAdmin.js";

import ProductAdmin from "./admin/ProductAdmin.js";
import AddProductAdmin from "./admin/AddProductAdmin.js";
import EditProductAdmin from "./admin/EditProductAdmin.js";

import CateAdmin from "./admin/CateAdmin.js";
import AddCateAdmin from "./admin/AddCateAdmin.js";
import EditCateAdmin from "./admin/EditCateAdmin.js";


import ContactAdmin from "./admin/ContactAdmin.js";

//admin




import { parseRequestUrl, $,onLoadCartNumber } from "./utils.js";

import Error404Page from "./page/Error404Page.js";
import Category from "./website/Category.js";
import InvoiceAdmin from "./admin/InvoiceAdmin.js";
import EditInvoiceAdmin from "./admin/EditInvoiceAdmin.js";
import Confirm from "./website/Confirm.js";










const routes = {
  "/": Home,
  "/shop": Shop,
  "/blog": Blog,
  "/contact": Contact,
  "/shopdetails/:id": ShopDetails,
  "/blogdetails": BlogDetails,
  "/shopcart": ShopCart,

  "/checkout": Checkout,
  "/confirm": Confirm,




// admin
  "/admin": HomeAdmin,

  //category
  "/category/:id": Category,
  //category

  "/adminuser":UserAdmin,
  "/adminadduser": AddUserAdmin,
  "/adminedituser/:id": EditUserAdmin,

  "/adminproduct":ProductAdmin,
  "/adminaddproduct": AddProductAdmin,
  "/admineditproduct/:id": EditProductAdmin,


  "/admincate": CateAdmin,
  "/adminaddcate": AddCateAdmin,
  "/admineditcate/:id": EditCateAdmin,

  "/admincontact": ContactAdmin,

  "/admininvoice": InvoiceAdmin,
  "/admineditinvoice/:id": EditInvoiceAdmin,


};


const router = async () => {
  const { resource, id ,action} = parseRequestUrl();
  const parseURL = (resource ? `/${resource}` : "/") + (id ? `/:id` : "") + (action ? `/${action}` : "") ;
  const page = routes[parseURL] ? routes[parseURL] : Error404Page ;
  
  $("#root").innerHTML = await page.render();
  
  if( page.afterRender){

    await page.afterRender();

    }
    onLoadCartNumber();
  
 
};


window.addEventListener("DOMContentLoaded", router);

window.addEventListener("hashchange", router);
