// document.querySelector(".on").onclick = function() {
//     document.querySelector(".resim").src="img/lamba_on.gif"
// }
document.querySelector(".on").addEventListener("click",()=>{
    document.querySelector(".resim").src="img/lamba_on.gif"
})
document.querySelector(".off").onclick = function() {
    document.querySelector(".resim").src="img/lamba_off.gif"
}
document.querySelector(".resim").addEventListener("mouseover",()=>{
    document.querySelector(".resim").src="img/lamba_on.gif"
})
document.querySelector(".resim").addEventListener("mouseout",()=>{
    document.querySelector(".resim").src="img/lamba_off.gif"
})