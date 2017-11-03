//REMEMBER GH-PAGES//

//PIZA CONSTRUCTOR: TOPPINGS AND SIZE
function Pizza(toppings, size){
  this.toppings = [];
  this.size = size;
}

var newPizza = new Pizza();

//PROTOTYPE METHOD FOR COST DEPENDING ON SELECTIONS
 Pizza.prototype.pizzaCost = function(){
   var topCost = newPizza.toppings.length * 50

   if(newPizza.size = "small"){
     return topCost + 10;
   }else if(newPizza.size = "medium"){
     return topCost + 100;
   }else{
     return topCost + 1000;
   }
};

$(document).ready(function(){



  $('#form').submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    newPizza.size = size;

    $("input:checkbox[name=toppings-input]:checked").each(function(){
    var top = $(this).val();
    newPizza.toppings.push(top)

    $('#results').text("your toppings are: " + newPizza.toppings + "your size is: " + newPizza.size);

    $('#cost').text(newPizza.pizzaCost());

    });
  });
});
