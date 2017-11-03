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

    var size = $("input:radio[name=size]:checked").val();
    newPizza.size = size;

    $("input:checkbox[name=toppings-input]:checked").each(function(){
    var top = $(this).val();
    newPizza.toppings.push(top)

    $('#results').text("your toppings are: " + newPizza.toppings + "your size is: " + newPizza.size);

    });
  });
});
