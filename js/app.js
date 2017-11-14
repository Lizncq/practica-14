window.addEventListener('load', function(event){
  //console.log(event.target);RECIBE EL CLIC, EJECUTA EL EVENTO
  //console.log(event.currentTarget);QUIEN ESCUCHA EL EVENTO, ENTONCES TIENE EL addEventListener
  var title = document.body.firstElementChild;
  var imagen = document.body.getElementsByTagName('img')[0];
  title.addEventListener('mouseover', function(event){
    //console.log(event.target);
    //console.log(event.target.currentTarget);
    //title.textContent = 'holaaa';
    event.target.textContent = 'holix';
  })
  title.addEventListener('mouseout', function(event){
    //title.textContent = 'hola mundo';
    event.target.textContent = 'hola';
  })

  imagen.addEventListener('mouseover', function(event){
    //console.log(event.target);HAS EL CONSOLE.LOG PARA SABER SI UTILIZAR TARGET O currentTarget
    //console.log(event.target.currentTarget);
    imagen.src = 'assets/leyenda10.png';
  //event.currentTarget.src=  con esto seria lo mismo que imagen.src
  })

  imagen.addEventListener('mouseout', function(event){
    imagen.src = 'assets/leyenda8.png';
    //event.currentTarget.src= lo mismo que imagen.src
  })
});
