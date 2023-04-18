function onRoll1(){
   var roll = Math.floor(Math.random()*6)+1;
   document.getElementById('result1').innerHTML = "<img src = 'image/" +roll+".png'/>";
   var roll = Math.floor(Math.random()*6)+1;
   document.getElementById('result2').innerHTML = "<img src = 'image/" +roll+".png'/>";

}
// function onRoll2(){
//     var roll = Math.floor(Math.random()*6)+1;
//     document.getElementById('result2').innerHTML = "<img src = 'image/" +roll+".png'/>";
//  }