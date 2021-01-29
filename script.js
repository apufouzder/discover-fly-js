// 1 increase
var firstTicketIncrease = document.querySelector('#first-ticket-increase');

firstTicketIncrease.addEventListener("click", function () {
    var firstTicketCount = document.querySelector('#first-ticket-count');
    var ticketCount = parseInt(firstTicketCount.value);
    var ticketNewCount = ticketCount + 1;
    firstTicketCount.value = ticketNewCount;

    var ticketTotal1 = ticketNewCount * 150;
    document.getElementById("ticket-total").innerText = '$' + ticketTotal1;
});
// 1 decrease
var firstTicketDecrease = document.querySelector('#first-ticket-decrease');

firstTicketDecrease.addEventListener("click", function(){
    var firstTicketCount = document.querySelector('#first-ticket-count');
    var ticketCount = parseInt(firstTicketCount.value);
    var ticketNewCount = ticketCount - 1;
    firstTicketCount.value = ticketNewCount; 

    var ticketTotal1 = ticketNewCount * 150;
    document.getElementById("ticket-total").innerText = '$' + ticketTotal1;
})


// // 1 increase
// var firstTicketIncrease = document.querySelector('#first-ticket-increase');

// firstTicketIncrease.addEventListener("click", function () {
//     var firstTicketCount = document.querySelector('#first-ticket-count');
//     var ticketCount = parseInt(firstTicketCount.value);
//     var ticketNewCount = ticketCount + 1;
//     firstTicketCount.value = ticketNewCount;

//     var ticketTotal1 = ticketNewCount * 150;
//     document.getElementById("ticket-total").innerText = '$' + ticketTotal1;
// });
// // 1 decrease
// var firstTicketDecrease = document.querySelector('#first-ticket-decrease');

// firstTicketDecrease.addEventListener("click", function(){
//     var firstTicketCount = document.querySelector('#first-ticket-count');
//     var ticketCount = parseInt(firstTicketCount.value);
//     var ticketNewCount = ticketCount - 1;
//     firstTicketCount.value = ticketNewCount; 

//     var ticketTotal1 = ticketNewCount * 150;
//     document.getElementById("ticket-total").innerText = '$' + ticketTotal1;
// })

// // 2
// var secondTicketIncrease = document.querySelector('#second-ticket-increase');

// secondTicketIncrease.addEventListener("click", function () {
//     var secondTicketCount = document.querySelector('#second-ticket-count');
//     var ticketCount = parseInt(secondTicketCount.value);
//     var ticketNewCount = ticketCount + 1;
//     secondTicketCount.value = ticketNewCount;

//     var ticketTotal2 = ticketNewCount * 100;
//     document.getElementById("ticket-total").innerText = '$' + ticketTotal2;
// });