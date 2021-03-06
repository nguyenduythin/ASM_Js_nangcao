import footer from "./layout/footer";
import header from "./layout/header";
import heroNormal from "./page/heroNormal";

import { $, parseRequestUrl } from "../utils";
import InvoiceApi from "../api/InvoiceAPI";

const Confirm = {
  async render() {
    let getPd = localStorage.getItem("productsInCart");
    let totalCost = localStorage.getItem("totalCost");
    totalCost = parseInt(totalCost);
    getPd = JSON.parse(getPd);
    const { data: invoices } = await InvoiceApi.getAll();

    const resultCheckout = invoices.filter(
      (item) => item.totalPrice == totalCost
    );
    //console.log(resultCheckout.name);
    console.log(resultCheckout[0].name);

    var resultCartTow = Object.values(getPd)
      .map((item) => {
        return /*html*/ `
          <li><img width="50px" style="margin-right:30px;" src="${
            item.image
          }" alt="">${item.name} <span>$${new Intl.NumberFormat("ja-JP").format(
          item.price
        )}</span>
        
        <span style="margin-right:100px;"> x ${item.inCart} </span></li>
          
          `;
      })
      .join("");

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
                           <h2>Confirmtion</h2>
                           <div class="breadcrumb__option">
                               <a href="#/">Home</a>
                               <span>Confirmtion</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <!-- Breadcrumb Section End -->
   
       <!-- Contact Section Begin -->
       <section class="contact spad">
           <div class="container">
           
               <div class="row">
               <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                       <div class="contact__widget">
                           
                           <h4>Name</h4>
                           <p>${resultCheckout[0].name}</p>
                       </div>
                   </div>
                   <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                       <div class="contact__widget">
                           
                           <h4>Phone</h4>
                           <p>${resultCheckout[0].phone}</p>
                       </div>
                       
                   </div>
                   <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                       <div class="contact__widget">
                           
                           <h4>Address</h4>
                           <p>${resultCheckout[0].address}</p>
                       </div>
                   </div>
                   
                   <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                       <div class="contact__widget">
                           
                           <h4>Email</h4>
                           <p>${resultCheckout[0].email}</p>
                       </div>
                   </div>
               </div>
               <div class="row">
               <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                       <div class="contact__widget">
                           
                           <h4>Note</h4>
                           <p>${resultCheckout[0].note}</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <!-- Contact Section End -->
   
       <!-- Contact Form Begin -->
       <div class="contact-form spad">
           <div class="container">
               <div class="row">
                   <div class="col-lg-12">
                   <div class="checkout__order">
                   <h4>Your Order</h4>
                   <div class="checkout__order__products">Products <span>Total</span></div>
                   <ul>
                    
                       ${resultCartTow}
                   </ul>
                   <div class="checkout__order__subtotal">Subtotal <span>$${new Intl.NumberFormat(
                     "ja-JP"
                   ).format(totalCost)}</span></div>
                   <div class="checkout__order__total">Shiping <span>$35.000</span></div>
                   <div class="checkout__order__total">Total <span>$${new Intl.NumberFormat(
                     "ja-JP"
                   ).format(totalCost + 35000)}</span>
                   <input type="hidden" id="totalPriceI" value="${totalCost}">
                   
                   </div>
                  
                   <div class="form-group row">
                   <div  class="col-4 checkout__order__products" style="margin-top:5px;" > Payment   </div>
                   <div class="col-8">
                   <div class="checkout__order__total" style="position: absolute;right: 20px;border-bottom: none;">
                   Cash
                   </div>
                   
                    </div>
                   </div>

                   <button id="clear-local" class="site-btn">Thank you for your customers</button>
               </div>
                   </div>
               </div>
               
           </div>
       </div>
       <!-- Contact Form End -->
   
   
   
   <!-- footer Section Begin -->
   ${await footer.render()}
<!-- footer Section End -->
        `;
  },
  async afterRender(){
      $('#clear-local').addEventListener('click' , e =>{
          
          localStorage.clear();
          window.location.href ="#/";
      })
  }
};
export default Confirm;
