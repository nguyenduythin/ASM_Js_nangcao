import footer from "./layout/footer";
import header from "./layout/header";
import heroNormal from "./page/heroNormal";
import ProductApi from "../api/ProductsAPI";
import { $, parseRequestUrl } from "../utils";

const ShopDetails = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: pd } = await ProductApi.getAll();
    // function lgt(arr) {
    //        for (let i = 0; i < arr.length; i++) {
    //         return arr.push(arr[i]);

    // }
    // }

    const relate = pd.slice(0, 4);
    const resultProducts = await relate
      .map((products) => {
        return /*html */ `

      <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="product__item">
          <div class="product__item__pic set-bg" >
          <img src="${products.image}" alt="">
              <ul class="product__item__pic__hover">
                  <li><a href="#"><i class="fa fa-heart"></i></a></li>
                  <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                  <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
          </div>
          <div class="product__item__text">
              <h6><a href="#">${products.name}</a></h6>
              <h5>$ ${new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(products.price)}</h5>
          </div>
      </div>
  </div>

      `;
      })
      .join("");

    const { data: products } = await ProductApi.get(id);

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
                        <h2>Vegetable’s Package</h2>
                        <div class="breadcrumb__option">
                            <a href="/#/">Home</a>
                            <a href="#/">Vegetables</a>
                            <span>Vegetable’s Package</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Product Details Section Begin -->
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large"
                                src="${products.image}" alt="">
                        </div>
                        <div class="product__details__pic__slider owl-carousel">
                            <img data-imgbigurl="public/website/img/product/details/product-details-2.jpg"
                                src="public/website/img/product/details/thumb-1.jpg" alt="">
                            <img data-imgbigurl="public/website/img/product/details/product-details-3.jpg"
                                src="public/website/img/product/details/thumb-2.jpg" alt="">
                            <img data-imgbigurl="public/website/img/product/details/product-details-5.jpg"
                                src="public/website/img/product/details/thumb-3.jpg" alt="">
                            <img data-imgbigurl="public/website/img/product/details/product-details-4.jpg"
                                src="public/website/img/product/details/thumb-4.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>${products.name}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">$${new Intl.NumberFormat(
                          "en-IN",
                          { maximumSignificantDigits: 3 }
                        ).format(products.price)}</div>
                        <p>${products.description}</p>
                        <div class="product__details__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <input type="number" value="1">
                                </div>
                            </div>
                        </div>
                        <button   class="primary-btn" id="addCart" style="border:none;">ADD TO CART</button>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Weight</b> <span>0.5 kg</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Information</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                    aria-selected="false">Reviews <span>(1)</span></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                        sed sit amet dui. Proin eget tortor risus.</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Details Section End -->

    <!-- Related Product Section Begin -->
    <section class="related-product">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title related__product__title">
                        <h2>Related Product</h2>
                    </div>
                </div>
            </div>
            <div class="row">
           
               
                ${resultProducts}
            </div>
        </div>
    </section>
    <!-- Related Product Section End -->

<!-- footer Section Begin -->
${await footer.render()}
<!-- footer Section End -->
        `;
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductApi.get(id);
    $("#addCart").addEventListener("click", (e) => {
        
      let cartNumbers = localStorage.getItem("cartNumbers");
      let cartSmall = document.getElementById("cartNumber");
      cartNumbers = parseInt(cartNumbers);
    
      if (cartNumbers) {
        localStorage.setItem("cartNumbers", cartNumbers + 1);
        cartSmall.textContent = cartNumbers + 1;
      } else {
        localStorage.setItem("cartNumbers", 1);
        cartSmall.textContent = 1;
      }
      
      setItem(product);
      totalCost(product);
      alert("Đã thêm sản phẩm vào giỏ hàng !");
    });

    function setItem(product) {
      let cartItems = localStorage.getItem("productsInCart");
      cartItems = JSON.parse(cartItems);
      console.log("my cart", cartItems);
      if (cartItems != null) {
        if (cartItems[product.id] == undefined) {
          cartItems = {
            ...cartItems,
            [product.id]: product,
          };
        }
        cartItems[product.id].inCart += 1;
      } else {
        product.inCart = 1;
        cartItems = {
          [product.id]: product,
        };
      }

      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
    function totalCost(product) {
      let cartCost = localStorage.getItem("totalCost");
      console.log("may price", cartCost);
      console.log(typeof cartCost);
      if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + parseInt(product.price));
      } else {
        localStorage.setItem("totalCost", product.price);
      }
    }
    
  },
};
export default ShopDetails;
