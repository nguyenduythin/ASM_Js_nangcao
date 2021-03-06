import footer from "./layout/footer";
import header from "./layout/header";
import Swal from "sweetalert2";

import { $, reRender } from "../utils.js";
import UserAPI from "../api/UserAPI";

const UserAdmin = {
  async render() {
    try {
      const { data: user } = await UserAPI.getAll();

      const result = await user
        .map((user, index) => {
          return /*html */ `
                    <tr>
                        <td>${index}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td><img width='70px' src="${user.avatar}"></td>
                        <td>${user.password}</td>
                  
                        <td>
                        <a href="/#/adminedituser/${user.id}"> <button style="border-radius: 6px;" type="button" class="btn btn-secondary"><i class="far fa-edit" ></i></button></a>
                        <button style="border-radius: 6px;" data-id="${user.id}" type="button" class="btn btn-danger btn-remove"> <i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
               
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
                    <label class="label-home" for="">home / <span>User</span></label>
            </div>   
        </div>
    </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="line-height: 38px;" >
                            <strong class="card-title" >User Data Table</strong> 
                               <div style="float: right;  "> 
                            <a href="/#/adminadduser"><button style="border-radius: 5px !important;" type="button" class="btn btn-primary">Add new</button></a>
                            </div>
                        </div>
                        <div class="card-body">
                         
                            <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Avatar</th>
                                        <th>Password</th>
                                    
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                <!-- .tr>td LIST-->
                                ${result}
                                <!-- .tr>td LIST -->


                                </tbody>
                            </table>
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button style="border-radius: 5px  0px 0px 5px ;"  type="button" class="btn btn-primary"><</button>
                                <button  type="button" class="btn btn-primary" >1</button>
                                <button type="button" class="btn btn-primary" >2</button>
                                <button type="button" class="btn btn-primary" >3</button>
                                <button style="border-radius: 0px  5px 5px 0px ;"  type="button" class="btn btn-primary">></button>
                            </div>
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
    } catch (error) {
      console.log(error);
    }
  },
  async afterRender() {
    const btns = $("#root .btn-remove");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", async function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            await UserAPI.remove(id);
            await reRender(UserAdmin, "#root");
          }
        });
      });
    });
  },
};
export default UserAdmin;
