import footer from "./layout/footer";
import header from "./layout/header";
import heroNormal from "./page/heroNormal";

import CateApi from "../api/CateAPI.js";
import ProductApi from "../api/ProductsAPI";
import { $, parseRequestUrl } from "../utils";


const Category = {
async render(){
    const { id } = parseRequestUrl();
    const { data: categories } = await CateApi.getAll();

    const { data: products } = await ProductApi.getAll();

    let resultListPd = products.filter(product => product.categoriesID == id);

       
  //  console.log(resultListPd.length);
    
     resultListPd = await  resultListPd.map((products) => {
        
      return /*html */`

                    <div class="col-lg-4 col-md-6 col-sm-6">
                   
                       <div class="product__item">
                           <div class="product__item__pic set-bg" >
                          <a href="/#/shopdetails/${products.id}">
                          <img  src="${products.image}" alt="">
                          </a>
                               <ul class="product__item__pic__hover">
                                   <li><a href="#"><i class="fa fa-heart"> </i></a></li>
                                   <li><a href="#"><i class="fa fa-retweet"> </i></a></li>
                                   <li><a href="#"><i class="fa fa-shopping-cart"> </i></a></li>
                               </ul>
                           </div>
                           <div class="product__item__text">
                           <a href="/#/shopdetails/${products.id}">
                                <h6>${products.name}</h6>

                                <h5>$${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(products.price) }</h5>
                            </a> 
                           </div>
                       </div>
                    </div>

      `;
    })
    .join("");
  
    const resultCate =await  categories
    .map((categories) => {
      return /*html */`

      <li><a href="/#/category/${categories.id}">${categories.name}</a></li>

      `;
    })
    .join("");
   
    let resultListPds = products.filter(product => product.categoriesID == id);

        return /*html*/ `
              

 <!-- Page Preloder -->

<!-- Header Section Begin -->
${await header.render()}
<!-- Header Section End -->


<!-- heroNormal Section Begin -->
${await heroNormal.render()}
<!-- heroNormal Section End -->

   <!-- Breadcrumb Section Begin -->
   <section class="breadcrumb-section " style="background-image: url(&quot;public/website/img/breadcrumb.jpg&quot;);">
   <div class="container">
       <div class="row">
           <div class="col-lg-12 text-center">
               <div class="breadcrumb__text">
                   <h2>Organi Shop</h2>
                   <div class="breadcrumb__option">
                       <a href="/#/">Home</a>
                       <span>Shop</span>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
<!-- Breadcrumb Section End -->

<!-- Product Section Begin -->
<section class="product spad">
   <div class="container">
       <div class="row">
           <div class="col-lg-3 col-md-5">
               <div class="sidebar">
                   <div class="sidebar__item ">
                      <a href="/#/shop"> <h4 class="sd-cate">Department</h4></a>
                       <ul class="menu-cate">
                       <li><a href="/#/shop">All Products</a></li>
                           ${resultCate}
                       </ul>
                   </div>
                   <div class="sidebar__item">
                       <h4>Price</h4>
                       <div class="price-range-wrap">
                           <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                               data-min="10" data-max="540">
                               <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                               <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                               <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                           </div>
                           <div class="range-slider">
                               <div class="price-input">
                                   <input type="text" id="minamount">
                                   <input type="text" id="maxamount">
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="sidebar__item sidebar__item__color--option">
                       <h4>Colors</h4>
                       <div class="sidebar__item__color sidebar__item__color--white">
                           <label for="white">
                               White
                               <input type="radio" id="white">
                           </label>
                       </div>
                       <div class="sidebar__item__color sidebar__item__color--gray">
                           <label for="gray">
                               Gray
                               <input type="radio" id="gray">
                           </label>
                       </div>
                       <div class="sidebar__item__color sidebar__item__color--red">
                           <label for="red">
                               Red
                               <input type="radio" id="red">
                           </label>
                       </div>
                       <div class="sidebar__item__color sidebar__item__color--black">
                           <label for="black">
                               Black
                               <input type="radio" id="black">
                           </label>
                       </div>
                       <div class="sidebar__item__color sidebar__item__color--blue">
                           <label for="blue">
                               Blue
                               <input type="radio" id="blue">
                           </label>
                       </div>
                       <div class="sidebar__item__color sidebar__item__color--green">
                           <label for="green">
                               Green
                               <input type="radio" id="green">
                           </label>
                       </div>
                   </div>
                  
                   <div class="sidebar__item">
                       <div class="latest-product__text">
                           <h4>Advertisement</h4>
                           <div class="latest-product__slider">
                              <img src="../../public/website/img/qc-1.gif" alt="">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="col-lg-9 col-md-7">
              
               <div class="filter__item">
                   <div class="row">
                       <div class="col-lg-4 col-md-5">
                           <div class="filter__sort">
                               <span>Sort By</span>
                               <select>
                                   <option value="0">Default</option>
                                   <option value="0">Default</option>
                               </select>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-4">
                           <div class="filter__found">
                               <h6><span>${ resultListPds.length}</span> Products found</h6>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-3">
                           <div class="filter__option">
                               <span class="icon_grid-2x2"></span>
                               <span class="icon_ul"></span>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="row">

               
                   ${resultListPd}
              
                  
                  
                   
                   
               </div>
               <div class="product__pagination">
                    <a href=""><</a>
                   <a href="">1</a>
                   <a href="">2</a>
                   <a href="">3</a>
                   <a href="">></a>
               </div>
           </div>
       </div>
   </div>
</section>
<!-- Product Section End -->


<!-- footer Section Begin -->
${await footer.render()}
<!-- footer Section End -->
        `;
        
    }
 
}
export default Category;