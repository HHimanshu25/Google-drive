window.addEventListener("load", () => {
    document.querySelector(".add-page").classList.remove('add-page2')
});
document.getElementById("page").addEventListener("click", () => {
    document.querySelector(".add-page").classList.toggle('add-page2')
});

document.querySelector(".second").addEventListener('click', ()=>{
    document.querySelector(".fileinput").click();
});