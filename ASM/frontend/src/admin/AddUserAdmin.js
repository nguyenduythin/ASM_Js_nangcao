import footer from "./layout/footer";
import header from "./layout/header";

import UserAPI from "../api/UserAPI";
import { $ } from "../utils.js";
import firebase from "../firebase";

const AddUserAdmin = {
  async render() {
    return /*html*/ `
   
  <!-- Left Panel -->
  <div class="container-fluid" style='background-color: #F1F2F7; width:100%;'>

  <div class="row">

${ await header.render()}
  
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
                            <strong class="card-title" >Add new</strong> 
                          
                        </div>
                        <div class="card-body">
                         

<!-- .tr>td LIST-->
        <form id="form-add" >
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <input id="name" type="text" class="form-control" placeholder="Your name" >
                        </div>
                        <div class="form-group">
                            <input id="email" type="email" class="form-control" placeholder="Your email" >
                        </div>
                        <div class="form-group">
                            <input id="password" type="text" class="form-control" placeholder="Your password" >
                        </div>
                     
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group alert-up-pd">
                                <div class="file-upload">
                                    <button class="file-upload-btn"  type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Your Avatar</button>
                                        
                                    <div class="image-upload-wrap">
                                        <input class="file-upload-input"  id="avatar"  type="file" onchange="readURL(this);"  />
                                    
                                        <div class="drag-text">
                                            <h3><i class="fas fa-download fa-2x" ></i> <br> Drag and drop a file or select add Image</h3>
                                        </div>
                                    </div>
                                    <div class="file-upload-content">
                                            <img class="file-upload-image"    type="file" src="" alt="your image" />
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
                    <button type="submit"  class="btn btn-primary btn-sbmt ">Submit</button>
                         </center>   
                        </div>
                    </div>
                </div>
        </form>
<!-- .tr>td LIST -->


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
    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("1");
      const userImg = $("#avatar").files[0];
      let storageRef = firebase.storage().ref(`image/${userImg.name}`);
      storageRef.put(userImg).then(function () {
        console.log(" thành công");
        storageRef.getDownloadURL().then((url) => {
          const user = {
            id: Math.random().toString(36).substr(2, 9),
            email: $("#email").value,
            name: $("#name").value,
            avatar: url,
            password: $("#password").value,
          };
          console.log(user);
          UserAPI.add(user);
          window.location.hash = "/adminuser";
          location.reload();
        });
      });
    });
  },
};
export default AddUserAdmin;
