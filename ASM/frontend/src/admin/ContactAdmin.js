import footer from './layout/footer';
import header from './layout/header';
import Swal from 'sweetalert2';

import { $, reRender } from "../utils.js";

import ContactApi from '../api/ContactAPI.js';


const ContactAdmin = {
    async render(){

        try {
            const { data: contacts } = await ContactApi.getAll();
                console.log(contacts.slice(0,2));
            const result = await contacts
              .map((contacts, index) => {
                return /*html */`
                    <tr>
                        <td>${index}</td>
                        <td>${contacts.nameContact}</td>
                        <td>${contacts.emailContact}</td>
                        <td>${contacts.messageContact}</td>
                     
                        <td>
                      
                        <button style="border-radius: 6px;" data-id="${contacts.id}" type="button" class="btn btn-danger btn-remove"> <i class="fas fa-trash-alt"></i></button>
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
                    <label class="label-home" for="">home / <span>Contact</span></label>
            </div>   
        </div>
    </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="line-height: 38px;" >
                            <strong class="card-title" >Contact Data Table</strong> 
                               <div style="float: right;  "> 
                            
                            </div>
                        </div>
                        <div class="card-body">
                         
                            <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name sender</th>
                                        <th>Email sender</th>
                                        <th>Message sender</th>
                                        
                                      
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
                     await ContactApi.remove(id);
                     await reRender(ContactAdmin, "#root");
                }
              })
      
        });
    });
    // -----------------------------------------------------------------
    








    // -----------------------------------------------------------------
}

    

}
export default ContactAdmin;