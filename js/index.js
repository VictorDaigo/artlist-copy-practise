const BannerUl = document.querySelector('.Banner-ul');
setInterval(() => {
  BannerUl.classList.toggle('BannerIsActive');
}, 5000);
const PoductsLi = document.querySelectorAll(`.Poducts-li`)
const ProductsA = document.querySelectorAll(`.Products-a`)
console.log(PoductsLi)
PoductsLi.forEach(( _ , i )=>{
    PoductsLi[i].addEventListener(`mouseenter`, ()=>{
        PoductsLi[i].classList.add(`ProductLiIsActive`) 
        ProductsA[i].style.border = "1px solid var(--bg-color)";
    }) 
})
PoductsLi.forEach(( _ , i )=>{
    PoductsLi[i].addEventListener(`mouseleave`, ()=>{
        PoductsLi[i].classList.remove(`ProductLiIsActive`);
        ProductsA[i].style.border = "1px solid var( --main-text-color)";
    }) 
})
