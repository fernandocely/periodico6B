const url1= 'https://carlosreneas.github.io/endpoints/noticias.json'

fetch(url1)
.then(response => response.json())
.then(data => {

    let res=document.getElementById('noticias')
    for (let i of data) {
            
        res.innerHTML+= `
        <a href="../html/conte.html""><h4>${i.titulo} – ${i.categoria} – ${i.fecha}</h4></a>
        <p>${i.descripcion} <a href="../html/conte.html" >Ver más</a></p>
        `
    }

})
const url2= 'https://carlosreneas.github.io/endpoints/categoria_deporte.json'

fetch(url2)
.then(response => response.json())
.then(data => {

    let res=document.getElementById('depo')
    for (const i of data) {
     
        res.innerHTML+=` 
        <a href="../html/noti.html""<p>${i.titulo}</p></a>
        <hr>
    ` 
    }
   
})

  const url3= 'https://carlosreneas.github.io/endpoints/categoria_tecnologia.json'
  
  fetch(url3)
  .then(response => response.json())
  .then(data => {
  
      let res=document.getElementById('tec')
      for (const i of data) {
       
          res.innerHTML+=` 
        <p>${i.titulo}</p>
        <hr>
      ` 
      }
     
  })
  const url4= 'https://carlosreneas.github.io/endpoints/noticia_1.json'

  fetch(url4)
  .then(response => response.json())
  .then(data => {
    
      let res=document.getElementById('not')
      res.innerHTML+= `
        <img src="${data.img}" width="100%" class="img-fluid" alt="">
        <h4>${data.titulo} – ${data.categoria} – ${data.fecha}</h4>
        <p>${data.descripcion}</p>
        <p>${data.detalle}</p>
        `
  
  })
  const url5= 'https://carlosreneas.github.io/endpoints/noticia_6.json'

  fetch(url5)
  .then(response => response.json())
  .then(data => {
    
      let res=document.getElementById('noti')
      res.innerHTML+= `
        <img src="${data.img}" width="100%" class="img-fluid" alt="">
        <h4>${data.titulo} – ${data.categoria} – ${data.fecha}</h4>
        <p>${data.descripcion}</p>
        <p>${data.detalle}</p>
        `
  
  })

  const url6= 'https://carlosreneas.github.io/endpoints/noticia_1.json'

  fetch(url6)
  .then(response => response.json())
  .then(data => {
    
      let res=document.getElementById('img2')
      res.innerHTML+= `
        <img src="${data.img}" width="100%" class="img-fluid" alt="">
        
        `
  
  })
