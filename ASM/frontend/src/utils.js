


export const parseRequestUrl = ()=>{
    const url = window.location.hash.toLowerCase();
    const request = url.split("/")
    return {
        resource: request[1],
        id: request[2],
        action: request[3]

    }
    
}
export const $ = (selector) => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
  };
  

  export const reRender = async (component , position = "" ) => {
      if (position) {
          $(position).innerHTML = await component.render();
      } else {
        $('#root').innerHTML = await component.render();
      }
      await component.afterRender();
  }

 export const onLoadCartNumber = function onLoadCartNumber() {

    localStorage.getItem('productsInCart');

    let cartNumbers = localStorage.getItem('cartNumbers');

    if(cartNumbers){
        document.getElementById('cartNumber').textContent = cartNumbers ;
     }
    }
     

     
     
  // if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com


   // if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com
