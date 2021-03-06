import footer from "./layout/footer";
import header from "./layout/header";
import Swal from "sweetalert2";

import { $, parseRequestUrl } from "../utils.js";
import firebase from "../firebase";

import InvoiceApi from "../api/InvoiceAPI";

const EditInvoiceAdmin = {
  async render() {
    const { resource, id } = parseRequestUrl();
    const { data: invoices } = await InvoiceApi.get(id);

    return /*html*/ `
   
  <!-- Left Panel -->
  <div class="container-fluid" style='background-color: #F1F2F7; width:100%;'>

  <div class="row">

${await header.render()}
  
    <div class="content mt-3" >
        <div class="animated fadeIn">
            <div class="row">
        <div class="col-md-12">
            <div class="row row-search" >
                <div class="col-6"> 
                    <form class="d-flex">
                        <input style="border-radius: 20px; width: 243px; " class="form-control me-2" type="search" placeholder="Search" >
                        <button class="btn btn-outline-secondary btn-search-admin " type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="col-6">
                    <label class="label-home" for="">home / <span>Invoice</span></label>
            </div>   
        </div>
    </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="line-height: 38px;" >
                            <strong class="card-title" >Edit new</strong> 
                          
                        </div>
                        <div class="card-body">
<!-- .tr>td LIST-->             

<!-- .tr>td LIST-->
<form id="form-add" >
<div class="row">
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="form-group">
        Name :
            <input id="name" type="text" class="form-control" placeholder="Your name " value="${
              invoices.name
            }" > 
        </div>
        <div class="form-group">
        Phone :
        <input id="phone" type="text" class="form-control" placeholder="Your phone" value="${
          invoices.phone
        }" > 
        </div>
        <div class="form-group">
            Email :
            <input id="email" type="text" class="form-control" placeholder="Your email" value="${
              invoices.email
            }" > 
        </div>
        <div class="form-group">
        Note:
            <input id="note" type="text" class="form-control" placeholder="Your name Cate" value="${
              invoices.note
            }" > 
        </div>
     
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
    <div class="form-group">
    Address :
    <input id="address" type="text" class="form-control" placeholder="Your name Cate" value="${
      invoices.address
    }" > 
    </div>
    <div class="form-group">
    Total Price :
    <input id="totalPrice" type="text" class="form-control" placeholder="Your name Cate" value="${
      invoices.totalPrice
    }" > 
    </div>
    <div class="form-group">
    <div class="control" > Payment : </div>
    <select id="payment"  class="form-control" id="">
    <option value="1" ${invoices.payment == 1 ? "selected" : ""} >Cash</option>
    <option value="2" ${
      invoices.payment == 2 ? "selected" : ""
    }>Visit Card</option>
    </select>
    </div>
    
    <div class="form-group">
    <div class="control" > Confirm : </div>
    <select id="confirm"  class="form-control" id="">
    
    <option value="1" ${
      invoices.confirm == 1 ? "selected" : ""
    }>Chưa hoàn Thành</option>
    <option value="2" ${
      invoices.confirm == 2 ? "selected" : ""
    }>Hoàn thành</option>
    </select>
    </div>


    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="payment-adress">
         <center>
    <button type="submit"  class="btn btn-primary btn-sbmt ">Submit</button>
         </center>   
        </div>
    </div>
</div>
</form>
<!-- .tr>td LIST -->

<!-- .tr>td LIST-->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- .footer -->
${await footer.render()}
<!-- .footer -->
</div>

</div>

</div>


        `;
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: invoices } = await InvoiceApi.get(id);

    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Edit has been saved",
        showConfirmButton: false,
        timer: 1000,
      });

      const newinvoice = {
        name: $("#name").value,
        phone: $("#phone").value,
        email: $("#email").value,
        address: $("#address").value,
        note: $("#note").value,
        totalPrice: $("#totalPrice").value,
        confirm: $("#confirm").value,
        payment: $("#payment").value,
      };
      setTimeout(function () {
        InvoiceApi.update(newinvoice, id);
        window.location.hash = "/admininvoice";
        location.reload();
      }, 1100);
    });
  },
};
export default EditInvoiceAdmin;
