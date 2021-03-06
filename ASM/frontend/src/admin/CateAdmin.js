import footer from './layout/footer';
import header from './layout/header';
import Swal from 'sweetalert2';

import { $, reRender } from "../utils.js";

import CateApi from '../api/CateAPI';


const CateAdmin = {
    async render(){

        try {
            const { data: categories } = await CateApi.getAll();
                console.log(categories.slice(0,2));
            const result = await categories
              .map((categories, index) => {
                return /*html */`
                    <tr>
                        <td>${index}</td>
                        <td>${categories.name}</td>
                        <td>6</td>
                     
                        <td>
                        <a href="/#/admineditcate/${categories.id}"> <button style="border-radius: 6px;" type="button" class="btn btn-secondary"><i class="far fa-edit" ></i></button></a>
                        <button style="border-radius: 6px;" data-id="${categories.id}" type="button" class="btn btn-danger btn-remove"> <i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
               
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
                    <label class="label-home" for="">home / <span>Categories</span></label>
            </div>   
        </div>
    </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="line-height: 38px;" >
                            <strong class="card-title" >Cate Data Table</strong> 
                               <div style="float: right;  "> 
                            <a href="/#/adminaddcate"><button style="border-radius: 5px !important;" type="button" class="btn btn-primary">Add new</button></a>
                            </div>
                        </div>
                        <div class="card-body">
                         
                            <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Count</th>
                                        
                                      
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
                                <button style="border-radius: 5px  0px 0px 5px ;"  type="button" class="btn btn-primary" id="button_prev"><</button>
                                <button    class="btn btn-primary"  id="page_number">1 </button>
                              
                                <button style="border-radius: 0px  5px 5px 0px ;"  type="button" class="btn btn-primary" id="button_next">></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- .footer -->
${await  footer.render()}
<!-- .footer -->
</div>

</div>

</div>


        `;


}catch (error) {
        console.log(error);
      }
    },
    async afterRender() {
    const btns = $("#root .btn-remove");
    btns.forEach((btn) => {
        const id = btn.dataset.id;
        btn.addEventListener("click",  function () {
            
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then(async(result) => {
                if (result.isConfirmed) {
                  
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                     await CateApi.remove(id);
                     await reRender(CateAdmin, "#root");
                }
              })
      
        });
    });
    // -----------------------------------------------------------------
    








    // -----------------------------------------------------------------
}

    

}
export default CateAdmin;