//   cb event listener

//  in html
$('#my_button').on('click', function(e) {
  console.log('Ouhh aku di klik!');
})

// inject in native js
  document.getElementById("my_button").addEventListener("click",function(){
    alert('Ouhh aku di klik!') 
 })

