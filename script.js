// First Class Ticket Increase and Decrease addEventListener.
document.getElementById('firstClass-ticket-increase').addEventListener("click", function () {
    handleTicketChange('firstClass', true);
});
document.getElementById('firstClass-ticket-decrease').addEventListener("click", function () {
    handleTicketChange('firstClass', false);
});

// Economy Ticket Increase and Decrease addEventListener.
document.getElementById('economy-ticket-increase').addEventListener("click", function () {
    handleTicketChange('economy', true);
});
document.getElementById('economy-ticket-decrease').addEventListener("click", function () {
    handleTicketChange('economy', false);
});


// inCrease and deCrease Function.
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-ticket-quantity');
    const ticketCount = getInputValue(ticket);
    // minus, plus condition
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    } if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    } if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    totalCalculate();
}

// subtotal, charge vat, total const calculate
function totalCalculate() {
    const firstCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');
    // total price calculate
    const subTotal = firstCount * 150 + economyCount * 100;
    document.getElementById("sub-total").innerText = '$' + subTotal;
    // tax or vat calculate
    const tax = Math.round(subTotal * 0.1);
    document.getElementById("taxCost").innerText = '$' + tax;
    // total price calculate
    const grandTotal = subTotal + tax;
    document.getElementById("totalCost").innerText = '$' + grandTotal;
}


// all ticket quantity function
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-ticket-quantity');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


// Book Now Button and thank you message. 
const bookingNowBtn = document.getElementById("book-now");
const section = document.getElementById("section");
const conformOrder = document.getElementById("conform-order");
const messageArea = document.getElementById("message");

bookingNowBtn.addEventListener("click", function () {
    const firstClassTicket = document.getElementById("firstClass-ticket-quantity").value;
    const economyTicket = document.getElementById("economy-ticket-quantity").value;

    if (firstClassTicket == 0 && economyTicket == 0) {
        alert("Sorry, you have not purchased any tickets!");
    } else {
        section.style.display = "none";
        conformOrder.style.display = "block";
        const p = document.createElement("p");
        p.innerText = `Hey, you have book ${firstClassTicket} first Class Ticket and ${economyTicket} Economy class Ticket.`;
        messageArea.appendChild(p);
    }
});

