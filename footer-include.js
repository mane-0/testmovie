const nav2 = document.querySelector('.footerrequist')
fetch('../../footer.html')
.then(res=>res.text())
.then(data=>{
    nav2.innerHTML=data
})
