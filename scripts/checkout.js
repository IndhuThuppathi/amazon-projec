import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderpaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import'../data/backend-practise.js';

async function loadpage(){
try{
 //throw 'error1';
   await loadProductsFetch();

  await new Promise((resolve,reject)=>{
      loadCart(()=>{
       // reject('error3');
        resolve('value3');
      });
  });

}catch(error){
     console.log('unexpected error.please try again later.');
}

 

   renderOrderSummary();
     renderpaymentSummary();




}
loadpage();



/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
  })


]).then((values)=>{
  console.log(values);
   renderOrderSummary();
     renderpaymentSummary();
});

*/
/*
new Promise((resolve)=>{
 
     loadProducts(()=>{
     
      resolve('value1');
     });
}).then(()=>{
  return new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
  });
   
}).then((value)=>{
    console.log(value);
     renderOrderSummary();
     renderpaymentSummary();
});


*/

/*

loadProducts(() =>{
  loadCart(()=>{
     renderOrderSummary();
     renderpaymentSummary();
  });
  
});
*/
