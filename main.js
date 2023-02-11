const h2s = document.getElementsByTagName("h2");

for (h2 of h2s) {
    h2.style.color = "lightblue"
}

document.getElementById("backpack").style.backgroundColor = "tomato";

const cards = document.getElementsByClassName("card");

for (item of cards) {
    item.style.borderRadius = "30px"
}

const emailId = document.getElementById("email-id");
emailId.addEventListener("keyup", function (e) {
    const text = e.target.value;
    const submitBtn= document.getElementById("submitbtn")
    if(text== "email"){
        submitBtn.removeAttribute("disabled")
    }
    else{
submitBtn.setAttribute("disabled", true)
    }
})






const pandaBuyBtn = document.getElementsByClassName("panda-btn-buy-now");

for (pandaBtn of pandaBuyBtn) {

    pandaBtn.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}



const shoesimg= document.getElementById("shoes-img");
shoesimg.addEventListener("mouseenter", function(){
    shoesimg.src= "images/categories/watch.png"
})

shoesimg.addEventListener("mouseleave", function(){
    shoesimg.src= "images/categories/bag.png"
})

const subscribeSection= document.getElementById("subscribe")
 subscribeSection.addEventListener("dblclick",function(){
   subscribeSection.style.backgroundColor= "tomato"
})