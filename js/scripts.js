// business logic

function Ticket(selectmovie, selecttime, inputage) {
  this.movie = selectmovie;
  this.time = selecttime;
  this.age = inputage;
};

// user interface logic

$(document).ready(function() {

  $('#next1').on('click', function (event) {
      $("#step2").show();
      $("#step1").hide();
      event.preventDefault();
    });

  $('#next2').on('click', function (event) {
    $("#step3").show();
    $("#step2").hide();
    event.preventDefault();
  });

  $("form#movies").submit(function(event) {

   event.preventDefault();

   var inputMovie = ($("#select-movie").val()).join();
   var inputTime = ($("#select-time").val()).join();
   var inputAge = parseInt($("#age").val());


   var newTicket = new Ticket(inputMovie, inputTime, inputAge);


   var price = 0

    if (newTicket.movie === "first-release"){
      price += 15;
    } else {
      price += 10;
    }

    if (newTicket.time === "matine"){
      price += 2
    } else if (newTicket.time === "afternoon"){
       price += 3
    } else {
       price += 5
    }

    if (newTicket.age > 50){
      price -= 5
    }

    $("#step4").show();
    $("#step3").hide();

    $("#show-price").text(price);

  });
});
