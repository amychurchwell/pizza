//REMEMBER GH-PAGES//

//PIZA CONSTRUCTOR: TOPPINGS AND SIZE
function Pizza(toppings, size){
  this.toppings = [];
  this.size = size;
}

//CHOOSE TOPPINGS AND SIZE

//PROTOTYPE METHOD FOR COST DEPENDING ON SELECTIONS
// Pizza.prototype.pizzaCost = function(){
//     var result =
//   };

$(document).ready(function(){

  var newPizza = new Pizza();

  $('#form').submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=toppings-input]:checked").each(function(){
      var yum = $(this).val();

    newPizza.toppings.push(yum)
    $('#results').text(newPizza.toppings);

    });
  });
});
