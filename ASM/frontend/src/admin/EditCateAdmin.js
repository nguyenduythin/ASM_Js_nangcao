import footer from './layout/footer';
import header from './layout/header';
import Swal from 'sweetalert2';

import { $,parseRequestUrl } from "../utils.js";
import firebase from "../firebase";

import CateApi from '../api/CateAPI';


const EditCateAdmin = {
  async render() {
    const { resource, id } = parseRequestUrl();
    const { data: categories } = await CateApi.get(id);
 
    

    return /*html*/`
   
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
                    <label class="label-home" for="">home / <span>User</span></label>
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
            <input id="name" type="text" class="form-control" placeholder="Your name Cate" value="${categories.name}" > 
        </div>
       
     
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      
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
 async afterRender(){
    const { id } = parseRequestUrl();
    const { data: categories } = await CateApi.get(id);
   
   

    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Edit has been saved',
        showConfirmButton: false,
        timer: 1000
      })
   
        const newCate = {
            name: $("#name").value
           
          };
          setTimeout(function(){   
          CateApi.update(newCate,id)
          window.location.hash = "/admincate";
          location.reload();
          },1100);
    });

            }
};
export default EditCateAdmin;