let typed = new Typed('#element',{
    strings:['HTML','CSS','JAVASCRIPT','REACT JS','MYSQL','NODE JS','C++'],
    typeSpeed:90,
    backSpeed:20,
    loop:true
});


let header = document.getElementsByTagName(a);
let btn = header.getElementsByClassName("bttn");

for(let i = 0; i< btn.length; i++){
    btn[i].addEventListener("click", ()=>{
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += " active"
    });
}