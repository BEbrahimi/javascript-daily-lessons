// Event Bubbling



/**
 * button
 * parent
 * body
 * document
 * 
 */


// Event Cupturing



document.getElementById("child").addEventListener("click", () =>{
    console.log("parent Clicked");
})

document.getElementById("parent").addEventListener("click", () =>{
    console.log("child Clicked");
})


// Event Delegation

// document.querySelectorAll("li").forEach(item =>{
//     item.addEventListener("click", () =>{
//         console.log("clicked")
//     })
// })


document.getElementById("users").addEventListener("click", (y)=>{
    console.log(y.target.textContent);
})