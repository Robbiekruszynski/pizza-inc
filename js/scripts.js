//back end logic

function.pizza() {
  this.size = []
  this.topping = []
  this.price=0
}

Pizza.prototype.userSize = function (size) {
  if (size === "Yours-10inch"){
  this.size = 10;

  }else if(size === "Small-15inch"){
    this.size = 20;

  }else if(size === "Medium-20inch"){
    this.size = 30;

  }else if(size === "Large-25inch"){
    this.size = 40;

};
