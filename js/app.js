const body = document.querySelector("body")
const imgChair = document.getElementById("imageChair")
const imgTiger = document.getElementById("imgTiger")
const imgCustom = document.getElementById("imgCustom")
body.onclick = (evt)=>{
    console.log(evt.pageY)
}
setTimeout(()=>{
    imgTiger.classList.remove("translate2")
    imgTiger.classList.add("opacity")
},500)

window.addEventListener("scroll",()=>{
    if(window.scrollY<=1500&&window.scrollY>=1130){
        imgCustom.classList.remove("translate2")
        imgCustom.classList.add("opacity")
    }
    
    if(window.scrollY<550&&window.scrollY>250){
        imgChair.classList.remove("translate")
        imgChair.classList.add("opacity")
    }
    console.log(window.scrollY)
    
})
