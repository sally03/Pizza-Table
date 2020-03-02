function Pizza(size, crust, toppings, total, orderNo) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
    this.orderNo = orderNo;
  }
  $(document).ready(function(){
    $("table").hide();
      var sizeOfPizza = $(".size option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza);
      var order = 0;
      var grandTotal = 0;
      $("button#add-pizza").hide();
      $("button#complete").hide();
      $(".location").hide();
      $('button#the-order').click(function() {
      $("button#the-order").show();
      $("table").show();
      $("button#the-order").hide();
      $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
      $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
      $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
      $("#total").html(total);
      $("button#add-pizza").show();
      $("button#complete").show();  
    });
    $('button#add-pizza').click(function() {
        var sizeOfPizza = $(".size option:selected").val();
        var crustOfPizza = $(".crust option:selected").val();
        var toppingsOfPizza = $(".toppings option:selected").val();
        var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza);
        order = order + 1;
        var newPizza = new Pizza(sizeOfPizza, crustOfPizza, toppingsOfPizza, total, order);
        grandTotal+=newPizza.total;
        var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="total">' + newPizza.total + '</td></tr>'
        $("#pizza:last").append(newRow);
      });
      $("button#complete").click(function(){
        $(".text").hide();
        $("button#complete").hide();
      });
      $("button#yes").click(function(){
        $(".text").hide();
        $(".location").show();
      });
      $("button#submit").click(function(){
        $(".location").hide();
        var location = $("input#locale").val();
        $(".response").text("Your pizza will be delivered to "+location);
        $(".add-info").show().text("The total is:"+ grandTotal);
      });
    });
    