import footer from "./layout/footer";
import header from "./layout/header";
import heroNormal from "./page/heroNormal";

import { $, parseRequestUrl } from "../utils";
import ProductApi from "../api/ProductsAPI";

const ShopCart = {
  async render() {
    let getPd = localStorage.getItem("productsInCart");
    let totalCost = localStorage.getItem("totalCost");
    totalCost = parseInt(totalCost);

    getPd = JSON.parse(getPd);
    let resultCart = `<h2 style="color:#09a92d;">Bạn chưa có Sản phẩm nào trong giỏ !   
    <div class="shoping__cart__btns">
    <a href="#/shop" class="primary-btn cart-btn">CONTINUE SHOPPING</a></div></h2>`;

    if (getPd) {
      let resultCartTow = Object.values(getPd)
        .map((item) => {
          return /*html */ ` 
          <tr>
            <td class="shoping__cart__item">
                <img width="60 "src="${item.image}" alt="">
                <h5>${item.name}</h5>
            </td>
            <td class="shoping__cart__price">
                $${new Intl.NumberFormat("ja-JP").format(item.price)}
            </td>
            <td class="shoping__cart__quantity">
                <div class="quantity">
                    <div class="pro-qty">
                        <input type="text" id="update-incart" name="" value="${
                          item.inCart
                        }">
                    </div>
                </div>
            </td>
            <td class="shoping__cart__total">
                $${new Intl.NumberFormat("ja-JP").format(
                  item.inCart * item.price
                )}
                <input type="hidden" value="${item.inCart * item.price}">
            </td>
            <td class="shoping__cart__item__close"  id="remove-cart" data-id="${
              item.id
            }">
                <span  class="icon_close" ></span>
            </td>
        </tr> `;
        })
        .join("");

      resultCart = /*html*/ `
          <div class="row">
          <div class="col-lg-12">
            <div class="shoping__cart__table">
                <table>
                    <thead>
                        <tr>
                            <th class="shoping__product">Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                           ${resultCartTow}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__btns">
                    <a href="#/shop" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                    <a  class="primary-btn cart-btn cart-btn-right" id="update-cart"><span class="icon_loading"></span>
                        Upadate Cart</a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="shoping__continue">
                    <div class="shoping__discount">
                        <h5>Discount Codes</h5>
                        <form action="#">
                            <input type="text" placeholder="Enter your coupon code">
                            <button type="submit" class="site-btn">APPLY COUPON</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="shoping__checkout">
                    <h5>Cart Total</h5>
                    <ul>
                        <li>Subtotal <span>$454.98</span></li>
                        <li>Total <span >$${new Intl.NumberFormat(
                          "ja-JP"
                        ).format(totalCost)}</span></li>
                    </ul>
                    <a href="#/checkout" class="primary-btn">PROCEED TO CHECKOUT</a>
                </div>
            </div>
      </div>
    
`;
    }

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
                        <h2>Shopping Cart</h2>
                        <div class="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Shoping Cart Section Begin -->
    <section class="shoping-cart spad">
        <div class="container">
            ${resultCart}
        </div>
    </section>
    <!-- Shoping Cart Section End -->

<!-- footer Section Begin -->
${await footer.render()}
<!-- footer Section End -->
        `;
  },
  async afterRender() {
    const { data: product } = await ProductApi.getAll();

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    console.log(cartItems.id);
    $("#update-cart").addEventListener("click", (e) => {
      const incart = $("#update-incart");

      for (let i = 0; i < incart.length; i++) {}
      console.log(cartItems);

    });

    const cartRemove = document.querySelectorAll("#remove-cart");
    for (let i = 0; i < cartRemove.length; i++) {
      cartRemove[i].addEventListener("click", (e) => {
        const id = cartRemove[i].dataset.id;

        const removeFilter = product.filter((pd) => pd.id == id);
        console.log(removeFilter[0].id);

        console.log(cartItems[removeFilter[0].id]);
      });
    }
  },
};
export default ShopCart;
