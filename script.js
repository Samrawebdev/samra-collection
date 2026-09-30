alert("welcome to samra collection")
let cart=[]
let buttons=document.querySelectorAll(".product button");
buttons.forEach(function(button ){
        button.addEventListener("click",function(){
    alert("Product added to cart!");
     cartlist.innerText=cart.join(", ");
    cart.push(button.parentElement.querySelector("h3").innerText+"-");
    alert("product added to cart:"+ cart[cart.length-1]);
    console.log("Cart items:",cart);   
    });
});
let cartButton=
document.createElement("button");
cartButton.innerText="🛒 MY Cart(0)";
document.body.appendChild(cartButton);
cartButton.addEventListener("click",function(){
alert("Your cart has"+cart.length+"item(s).");
 });
 let cartBox=document.createElement("div");
 cartBox.innerHTML="<h3>My Cart</h3>";
 cartBox.querySelector("h3").style.marginTop="0";
 document.body.appendChild(cartBox);
 cartBox.style.display="none";
cartButton.addEventListener("click",function(){
    cartBox.style.display="block";
  });
 let cartlist=document.createElement("p");
 cartBox.appendChild(cartlist);
 cartlist.innerText="Cart is empty";
 buttons.forEach(function(button){
    button.addEventListener("click",function(){
        cartlist.innerText=cart.join(", ");
    }); 
 });
 cartBox.style.padding="15px";
cartBox.style.margin="20px auto";
cartBox.style.border="1px solid #ddd";
cartBox.style.backgroundColor="#fff7f9";
cartBox.style.width="300px";
cartBox.style.textAlign="center";
cartBox.style.borderRadius="10px";
cartButton.addEventListener("click",function(){
    if(cartBox.style.display=="none"){
        cartBox.style.display="block";
    }
    else{
        cartBox.style.display="none";
    }
 });  
cartButton.style.margin="20px"; 
cartButton.style.padding="10px 20px";      
cartButton.style.backgroundColor="#ff69b4";
cartButton.style.color="white";
cartButton.style.border="none" ;
cartButton.style.borderRadius="10px";  
cartButton.style.cursor="pointer";
cartButton.style.fontSize="16px";
cartButton.style.display="block";
cartButton.style.boxShadow="0 3px 8px rgba(0,0,0,0.2)";
cartButton.style.fontWeight="bold";  
cartButton.style.transition="0.3s"; 
cartBox.querySelector("h3").style.marginTop="0";
cartBox.querySelector("h3").style.fontSize="22px"; 
cartButton.addEventListener("mouseover",function(){
cartButton.style.transform="scale(1.05)";
});
cartButton.addEventListener("mouseout",function(){
cartButton.style.transform="scale(1)";
});
cartBox.style.transition="0.3s";
cartBox.style.boxShadow="0 3px 10px rgba(0,0,0,0.15";
cartBox.style.position="relative";
cartlist.style.fontSize="16px";
cartlist.style.lineHeight="1.8";
cartlist.style.marginTop="15px";
cartlist.style.color="#555";
cartlist.style.fontWeight="500";
cartlist.style.wordBreak="break-word";
cartlist.style.display="block";
cartlist.style.width="100%";
cartlist.style.boxSizing="border-box";
cartlist.style.textAlign="left";
cartlist.style.overflow="auto";
cartlist.style.maxHeight="300px";
cartlist.style.marginBottom="15px";
cartlist.style.transition="0.3s";
cartlist.style.cursor="default";
cartlist.style.listStyleType="none";
cartlist.style.paddingLeft="0";
cartlist.style.display="flex";
cartlist.style.flexDirection="column";
cartlist.style.gap="10px";
cartlist.style.padding="10px";
cartlist.style.margin="15px 0";
cartlist.style.backgroundColor="#fff";
cartlist.style.borderRadius="10px";
cartlist.style.overflowY="auto";
cartlist.style.border="1px solid #ddd";
let closeButton=document.createElement("button");
closeButton.innerText="Close Cart";
cartBox.appendChild(closeButton);
closeButton.style.padding="10px 20px";
closeButton.style.backgroundColor="#555";
closeButton.style.color="white";
closeButton.style.border="none";
closeButton.style.borderRadius="8px";
closeButton.style.cursor="pointer";
closeButton.style.fontSize="15px";
closeButton.addEventListener("click",function(){
    cart=[];
    cartlist.innerText="Cart is empty"
});
let clearButton=document.createElement("button");
clearButton.addEventListener("mouseover",function(){
    clearButton.style.transform="scale(1.05)";
});
clearButton.addEventListener("mouseout",function(){
 clearButton.style.transform="scale(1)";
});
let checkoutButton=document.createElement("button")
checkoutButton.innerText="Checkout";
cartBox.appendChild(checkoutButton);
checkoutButton.style.padding="1 0px 20px";
checkoutButton.style.marginLeft="10px";
checkoutButton.style.backgroundColor="#28a745";
checkoutButton.style.color="white";
checkoutButton.style.border="none";
checkoutButton.style.borderRadius="8px";
checkoutButton.style.cursor="pointer";
checkoutButton.style.fontSize="15px";
checkoutButton.addEventListener("click",function(){
    if(cart.length==0){
        alert("Your cart is empty");
    }
    else{
        alert("Thank you for your order!");
    }
});
clearButton.innerText="clear cart";
cartBox.appendChild(clearButton);
clearButton.style.padding="10px 20px";
clearButton.style.marginTop="10px";
clearButton.style.backgroundColor="#dc3545";
clearButton.style.color="white";
clearButton.style.border="none";
clearButton.style.borderRadius="8px";
clearButton.style.cursor="pointer";
clearButton.style.fontSize="15px";
clearButton.addEventListener("click",function(){
    cart=[];
    cartlist.innerText="cart is empty";
    cartButton.innerText="MY cart(0)";
    alert("cart cleared!");
});
continueButton=document.createElement("button");
continueButton.innerText="continue Shopping";
cartBox.appendChild(continueButton);
continueButton.style.padding="10px 20px";
continueButton.style.marginTop="10px";
continueButton.style.backgroundColor="#007bff";
continueButton.style.color="white";
continueButton.style.border="none";
continueButton.style.borderRadius="8px";
continueButton.style.cursor="pointer";
continueButton.style.fontSize="15px";
continueButton.addEventListener("click",function(){
    cartBox.style.display="none";
});
continueButton.addEventListener("mouseover",function(){
    continueButton.style.transform="scale(1.05)";
});
continueButton.addEventListener("mouseout",function(){
      continueButton.style.transform="scale(1)";
});
continueButton.style.transition="0.3s";
console.log("shopping website javascript loaded succesfully!");









 
 


    
