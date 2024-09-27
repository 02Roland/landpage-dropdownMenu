let table = document.querySelectorAll(".drop")
table.forEach(link=>{
    link.addEventListener("click", (e)=>{
        e.currentTarget.parentElement.lastElementChild.style.display ='block';
        e.currentTarget.lastElementChild.style.display='block';
        e.currentTarget.firstElementChild.style.display ='none'
    })
})
console.log(table)

