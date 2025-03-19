const body = document.querySelector("body")
const imgChair = document.getElementById("imageChair")
const imgTiger = document.getElementById("imgTiger")
const imgCustom = document.getElementById("imgCustom")
body.onclick = (evt)=>{
    console.log(evt.pageY)
}
console.log(window.screen)
setTimeout(()=>{
    if(window.screen.width>600){
        imgTiger.classList.remove("translate2")
        imgTiger.classList.add("opacity")
    }
},500)

window.addEventListener("scroll",()=>{
    if(window.screen.width>600){
        if(window.scrollY<=1500&&window.scrollY>=1130){
            imgCustom.classList.remove("translate2")
            imgCustom.classList.add("opacity")
        }
        
        if(window.scrollY<550&&window.scrollY>250){
            imgChair.classList.remove("translate")
            imgChair.classList.add("opacity")
        }

    }
    if(window.screen.width<600){
        if(window.scrollY<=200&&window.scrollY>=20){
            imgChair.classList.remove("translate")
            imgChair.classList.add("opacity")
        }
        if(window.scrollY>=2016){
            imgTiger.classList.remove("translate2")
            imgTiger.classList.add("opacity")
        }
        if(window.scrollY>=3147){
            imgCustom.classList.remove("translate2")
            imgCustom.classList.add("opacity")
        }
    }
    console.log(window.scrollY)
    
})
