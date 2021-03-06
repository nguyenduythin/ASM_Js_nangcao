import footer from './layout/footer';
import header from './layout/header';
import Swal from 'sweetalert2';

import ProductApi from '../api/ProductsAPI';
import { $,parseRequestUrl } from "../utils.js";
import firebase from "../firebase";
import CateApi from '../api/CateAPI';


const EditProductAdmin = {
  async render() {
    const { resource, id } = parseRequestUrl();
    const { data: products } = await ProductApi.get(id);
    console.log(products.categoriesID);
    

   const { data: categories } = await CateApi.getAll();
      
            const resultCate = await categories
              .map((cate) => {
                return /*html */`
                <option value="${cate.id}" ${  products.categoriesID == cate.id ? "selected" : ""} >${cate.name}</option>
                `;
              })
              .join("");
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
                    <label class="label-home" for="">home / <span>Product</span></label>
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
    <form action="" id="form-add">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <input id="namePd" type="text" class="form-control" placeholder="Your name" value="${products.name}" >
                        </div>
                        <div class="form-group">
                            <input id="pricePd" type="number" class="form-control" placeholder="Your Price" value="${products.price}" >
                        </div>
                        <div class="form-group">
                        <input id="descriptionPd" type="text" class="form-control" placeholder="Your description" value="${products.description}" >
                        </div>
                        <div class="form-group">
                            <input id="quantityPd" type="number" class="form-control" placeholder="Your quantity" value="${products.quantity}" >
                        </div>
                        <div class="form-group"><label for="">Category :</label>
                                <select class="form-control"  id="catePd" aria-label="select example">
                                        ${resultCate}
                                </select>
                        </div>
                     
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group alert-up-pd">
                                <div class="file-upload">
                                <button class="file-upload-btn"  type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Your Avatar</button>
                                <div style="width: 100%;">
                                    <div class="img-av">
                                        <img    src="${products.image}" alt="">
                                    </div>

                                <div class="image-upload-wrap" style="float: right;width: 50%;">

                              <input class="file-upload-input"    id="imagePd"  type="file" onchange="readURL(this);" accept="image/*" />
                              
                              <div class="drag-text">
                                <h3><i class="fas fa-download fa-2x" ></i> <br> Drag and drop a file or select add Image</h3>
                              </div>

                              
                                </div>
                        
                      
                            <div class="file-upload-content" >
                              <img class="file-upload-image"    alt="your image" />
                              <div class="image-title-wrap">
                                <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                              </div>
                            </div> 
                         </div>
                                </div>
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
 async afterRender(){
    const { id } = parseRequestUrl();
    const { data: products } = await ProductApi.get(id);
    console.log(products);
   

    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Edit has been saved',
        showConfirmButton: false,
        timer: 1000
      })

      const productImage = $("#imagePd").files[0];
      if (productImage) {
        let storageRef = firebase.storage().ref(`image/${productImage.name}`);
        storageRef.put(productImage).then(function () {
          console.log(" thành công");
          storageRef.getDownloadURL().then((url) => {
            const newProducts = {
              name: $("#namePd").value,
              image: url,
              price: $("#pricePd").value,
              description: $("#descriptionPd").value,
              quantity: $("#quantityPd").value,
              categoriesID: $("#catePd").value

            };
          setTimeout(function(){   
           ProductApi.update(newProducts,id)
            window.location.hash = "/adminproduct";
            location.reload();
          }, 1100);
            
          });
        });
      } else {
        
        setTimeout(function(){ 
          const newProducts = {
            name: $("#namePd").value,
            image: products.image,
            price: $("#pricePd").value,
            description: $("#descriptionPd").value,
            quantity: $("#quantityPd").value,
            categoriesID: $("#catePd").value
        };
          
          ProductApi.update(newProducts,id)
           window.location.hash = "/adminproduct";
           location.reload();
         }, 1100);
      }
    });

            }
};
export default EditProductAdmin;
