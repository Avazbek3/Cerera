function toggles(){
    let  popup = document.getElementById('catt');
    const body = document.querySelector('body');
    const sections = document.querySelector('.sections');
    popup.classList.toggle('active');
    // if(body.style.overflow == 'hidden'){
    //     body.style.overflow = 'scroll'
    // } else{
    //     body.style.overflow = 'hidden';
    // }
    if(sections.style.opacity == '0.5'){
        sections.style.opacity = '1'
    } else{
        sections.style.opacity = '0.5';
    }
    // sections.style.filter = 'blur(5px)';
}
function catd(){
    let catd = document.getElementById('catd')
    const body = document.querySelector('body')
    const sections = document.querySelector('.sections')
    catd.classList.toggle('active')
}
function load(){
    const load = document.querySelector('#calcs')
    const text = document.querySelector('.load span')
    load.classList.toggle('active')
    if(text.style.display == 'none'){
        text.style.display = 'inline'
    } else{
        text.style.display = 'none';
    }
}

document.querySelectorAll('.products .product .pictures .sup img').forEach((src)=>{
    src.onclick = ()=>{
       // document.querySelector('.products .product .pictures .main img').src = src.src
        var temp = document.querySelector('.products .product .pictures .main img').src;
        document.querySelector('.products .product .pictures .main img').src = src.src;
        src.src = temp;
    }
})

document.querySelectorAll('.option').forEach((act)=>{
    act.onclick = ()=>{
        act.classList.toggle('active')
    }
})

document.querySelectorAll('.closing').forEach((clo)=>{
    clo.onclick = ()=>{
        clo.closest('.cart').style.display = 'none'
    }
})

var carts = document.getElementsByClassName('cart')
var kolvo = document.getElementById('kolvo')
if(carts.length == 2 || carts.length == 3 || carts.length === 4){
    kolvo.innerHTML = carts.length + " товара"
}
else if(carts.length == 1){
    kolvo.innerHTML = carts.length + " товар" 
}
kolvo.innerHTML = carts.length + " товаров"
console.log(carts.length)








