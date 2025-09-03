 var a = new Date(String.fromCharCode(50, 48, 50, 53, 45, 48, 55, 45, 50, 51));

  console.log(a);


     var b = new Date();
     var c = new Date(b.getFullYear(), b.getMonth(), b.getDate());

     if (c >= a) {
         document.getElementById('overlay').style.display='block' ;
     }