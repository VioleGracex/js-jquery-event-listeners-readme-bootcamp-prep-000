//define functions here

$(document).ready(function(){

// call functions here

});
function getIt()
{
  $("p").on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
}
