//back end logic
function Pizza() {
  this.size = [];
  this.toppings = [];
  this.price=0;
}

  Pizza.prototype.userSize = function (size) {

    if(size === "8inch") {
    this.size = 10;

  }else if(size === "12inch") {
    this.size = 20;

  }else if(size === "15inch") {
    this.size = 30;

  }else if(size === "20inch") {
    this.size = 40;
  }

}

Pizza.prototype.userToppings = function () {
  if (this.toppings ==="toppings") {
    this.topping = 3;

  }else if (this.toppings ==="toppings") {
    this.topping = 5;

  }else if (this.toppings ==="toppings"){
    this.topping = 20;

  }else if (this.toppings ==="toppings"){
    this.topping = 30;

  }else if (this.topping ==="toppings"){
    this.topping = 30;

  }else {
    this.toppings = 0;
  }

}

Pizza.prototype.totalPrice = function() {
  return this.size += this.toppings;
}

//front end logic
$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();

    var pizzaSize = parseInt($("#pizza-size").val());
    var totalToppings = 0;
    $("input:checkbox[name=toppings]:checked").each(function() {
      totalToppings += parseInt($(this).val());
    });

    var newPizzaOrder = new Pizza();

    totalPrice=(pizzaSize + totalToppings);
    $("#cost").text(totalPrice);
    $(".result").show();
    event.preventDefault();
  });
});
