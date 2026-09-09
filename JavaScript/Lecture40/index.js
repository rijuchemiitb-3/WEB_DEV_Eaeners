let btn = document.querySelector("#reveal-gift")
let h1 = document.querySelector("#gift")

function revealGift(event){
    console.log(event);
    console.log(event.type);
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);
    h1.classList.remove("hidden")
    // h1.classList.add("visible")
}

// btn.addEventListener('click', function() {
//     console.log("Hello Buddy");
// })

btn.addEventListener('click', revealGift)