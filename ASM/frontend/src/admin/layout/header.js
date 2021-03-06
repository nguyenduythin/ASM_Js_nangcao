const header = {
    async render(){
        return /*html*/`
        
        <div style="background-color:white;" class="col-2"> 
        <div style="position: fixed">
    <center>
    <div>
    <a href=""><img src="public/admin/images/logo.png" alt=""></a>  
    </div> 
   </center>
    <nav class="nav flex-column sidebar-admin" style="margin-left: 15px;margin-top: 25px;">
        <a class="nav-link" href="/#/admin"  > <i class="fas fa-home"></i>  Home</a>
        <a class="nav-link"  href="/#/adminuser"  >  <i class="fas fa-users "></i> User</a>
        <a class="nav-link"  href="/#/adminproduct"  >  <i class="fab fa-dropbox"></i> Products</a>
        <a class="nav-link"  href="/#/admincate"  >  <i class="fas fa-list-alt"></i> Categories</a>
        <a class="nav-link"  href="#/admininvoice" >  <i class="fas fa-credit-card"></i> Invoices</a>
        <a class="nav-link"  href="#/admincontact" >  <i class="fas fa-inbox"></i> Contact </a>
        <a class="nav-link"  href="#/adminblog" >  <i class="fas fa-blog"></i> Blogs</a>
        <hr style="margin-top: 30px;" >
        <a class="nav-link"  href="">  <i class="fas fa-cogs"></i> Setting</a>
        <a class="nav-link"  href="" >  <i class="fas fa-sign-out-alt"></i> Log out</a>
     
    </nav>
    </div>
  </div>
  <div class="col-10">
    <div class="row" style="background-color: #006DF0; height: 60px; color: white;text-align: center; ">
        <div class="col-10" >
        <nav class="nav navbar-light " style=" line-height: 42px;">
                <span class="nav-link " href="áđá" >  Home</span>
                <span class="nav-link"  href="" >  User</span>
                <span class="nav-link"  href="" > Products</span>
                <span class="nav-link"  href="" >    Categories</span>
                <span class="nav-link"  href="" >  Blogs</span>
        </nav>
        </div>
        <div class="col-2"  > 
            <div class="row" style="line-height: 55px;">
             <div class="col-6">
                 
                <label for="" style=" width: 96px;   overflow: hidden;
                text-overflow: ellipsis; 
                ">name</label>
            </div>
            <div class="col-4">
                <img width="55px" style="border-radius: 23px;" src="public/admin/images/admin.jpg" alt="">
            </div>
            </div>
        </div>
    </div>
        
        
        `;
    }
}
export default header;