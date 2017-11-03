//REMEMBER GH-PAGES//

//PIZA CONSTRUCTOR: TOPPINGS AND SIZE
function Pizza(toppings, size){
  this.toppings = [];
  this.size = size;
}


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

var newPizza = new Pizza();
$(document).ready(function(){

  $('#form').submit(function(event){
    event.preventDefault();

    var time = $("input#time").val();
    var address = $("input#inputAddress").val();
    var zip = $("input#inputZip").val();
    var name = $("input#inputName").val();
    var size = $("input:radio[name=size]:checked").val();
    newPizza.size = size;


    $("input:checkbox[name=toppings-input]:checked").each(function(){
      var top = $(this).val();
      newPizza.toppings.push(" " + top)
    });

    $('#toppings').text(newPizza.toppings);
    $('#size').text(newPizza.size);
    $('#cost').text("$" + newPizza.pizzaCost());
    $('#delivery').text(name + " " + address + " Portland, " + zip);
    $('#insertname').text(name + "!");


    $('.info').fadeIn();
    $('.card').fadeIn();

    $('#close').click(function(){
      $('.info').fadeOut();
      $('.card').fadeOut();
    });


  });

  $('#deliv').click(function(){
    $('#div-deliv').toggle();
  });
});
