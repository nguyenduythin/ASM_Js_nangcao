import footer from "./layout/footer";
import header from "./layout/header";
import Swal from "sweetalert2";

import ProductApi from "../api/ProductsAPI";
import { $ } from "../utils.js";
import firebase from "../firebase";
import CateApi from "../api/CateAPI";

const AddProductAdmin = {
  async render() {
  
    const { data: categories } = await CateApi.getAll();

    const resultCate = await categories
      .map((cate) => {
        return /*html */ `
                <option value="${cate.id}">${cate.name}</option>
                `;
      })
      .join("");
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
                    <label class="label-home" for="">home / <span>Product</span></label>
            </div>   
        </div>
    </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="line-height: 38px;" >
                            <strong class="card-title" >Add new</strong> 
                          
                        </div>
                        <div class="card-body">
<!-- .tr>td LIST-->             

<!-- .tr>td LIST-->
    <form action="" id="form-add">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <input id="namePd" type="text" class="form-control" placeholder="Your name"  >
                            <div class="form-ms"></div>
                            </div>
                            <div class="form-group">
                            <input id="pricePd" type="number" class="form-control" placeholder="Your Price"  >
                            <div class="form-message"></div>
                        </div>
                        
                        <div class="form-group">
                            <input id="quantityPd" type="number" class="form-control" placeholder="Your quantity"  >
                            <div class="form-message"></div>
                        </div>
                        <div class="form-group"><label for="">Category : </label>
                                <select class="form-select cate-pd" id="catePd" aria-label="select example">
                                <option value=""  style='color:gray;'> Chọn danh mục</option>
                                        ${resultCate}
                                </select>
                        </div>
                        <div class="form-group">
                        <span for=""> Description :</span>
                        
                        </div><textarea id="descriptionPd"  class="description-pd" rows="4" cols="77" >
                      
                        </textarea>
                        <div class="form-message"></div>
                     
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group alert-up-pd">
                                <div class="file-upload">
                                    <button class="file-upload-btn"  type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Your Avatar</button>
                                        
                                    <div class="image-upload-wrap">
                                        <input class="file-upload-input"  id="imagePd"  type="file" onchange="readURL(this);"  />
                                    
                                        <div class="drag-text">
                                            <h3><i class="fas fa-download fa-2x" ></i> <br> Drag and drop a file or select add Image</h3>
                                        </div>
                                    </div>
                                    <div class="file-upload-content">
                                            <img class="file-upload-image"   type="file" src="" alt="your image" />
                                        <div class="image-title-wrap">
                                            <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
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

                    <button type="submit" id="btn-submit"  class="btn btn-primary btn-sbmt ">Submit</button>

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
${ await footer.render()}
<!-- .footer -->
</div>

</div>

</div>


        `;
  },
  async afterRender() {


    $("#form-add").addEventListener("submit", (e) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      const nameV = $("#namePd").value;
      const priceV = $("#pricePd").value;
      const quantityV = $("#quantityPd").value;
      const descriptionV = $("#descriptionPd").value;
      const cateV = $("#catePd").value;
      const imageV = $("#imagePd").files[0];
      
      

      // lưu vào trong mảng

      // sau đó mới gọi đến form-message

      if (nameV == null || nameV == "") {
        Toast.fire({
          icon: "warning",
          title: "Bạn chưa nhập tên !",
        });
        return false;
      } else if (priceV == "") {
        Toast.fire({
          icon: "warning",
          title: "Bạn chưa nhập giá sản phẩm !",
        });
      } else if (priceV < 0) {
        Toast.fire({
          icon: "warning",
          title: "Giá sản phẩm là số dương !",
        });
        return false;
      } else if (quantityV == "") {
        Toast.fire({
          icon: "warning",
          title: "Bạn chưa nhập Số lượng !",
        });
        return false;
      } else if (imageV == undefined) {
        Toast.fire({
          icon: "warning",
          title: "Bạn chưa Thêm ảnh SP  !",
        });
        return false;
      }else if (cateV == "") {
        Toast.fire({
          icon: "warning",
          title: "Bạn chưa Chọn danh mục !",
        });
        return false;
      } else if (descriptionV.trim() == "") {
        Toast.fire({
          icon: "warning",
          title: "Bạn chưa thêm chi tiết SP !",
        });
        return false;
      } else {
        e.preventDefault();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        const productImage = $("#imagePd").files[0];

        let storageRef = firebase.storage().ref(`image/${productImage.name}`);
        storageRef.put(productImage).then(function () {
          console.log(" thành công");
          storageRef.getDownloadURL().then((url) => {
            setTimeout(function () {
              const products = {
                id: Math.random().toString(36).substr(2, 9),
                name: $("#namePd").value,
                image: url,
                categoriesID: $("#catePd").value,
                price: $("#pricePd").value,
                description: $("#descriptionPd").value,
                quantity: $("#quantityPd").value,
              };

              ProductApi.add(products);
              window.location.hash = "/adminproduct";
              location.reload();
            }, 1000);
          });
        });
      }
    });
  },
};
export default AddProductAdmin;
