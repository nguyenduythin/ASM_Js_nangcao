import footer from "./layout/footer";
import header from "./layout/header";

const HomeAdmin = {
  async render() {

    

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
                        <button    class="btn btn-outline-secondary btn-search-admin" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <div class="col-6">
                    <label class="label-home" for=""> <span>Home</span></label>
            </div>   
        </div>
    </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header" style="line-height: 38px;" >
                            <strong class="card-title" >Data Table</strong> 
                               <div style="float: right;  "> 
                            <button style="border-radius: 5px !important;" type="button" class="btn btn-primary">Primary</button>
                            </div>
                        </div>
                        <div class="card-body">
                         
                            <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>$320,800</td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>$170,750</td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>$170,750</td>
                                    </tr><tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td><button style="border-radius: 6px;" type="button" class="btn btn-secondary"><i class="far fa-edit" ></i></button>
                                            <button style="border-radius: 6px;" type="button" class="btn btn-danger"> <i class="fas fa-trash-alt"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button style="border-radius: 5px  0px 0px 5px ;"  type="button" class="btn btn-primary"><</button>
                                <button  type="button" class="btn btn-primary">5</button>
                                <button type="button" class="btn btn-primary">6</button>
                                <button type="button" class="btn btn-primary">7</button>
                                <button style="border-radius: 0px  5px 5px 0px ;"  type="button" class="btn btn-primary">></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- .animated -->
    </div>
${await footer.render()}
</div>

</div>

</div>

        
        `;
  },
};
export default HomeAdmin;
