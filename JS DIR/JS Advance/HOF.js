function bookMyShow(callSearchMovie, callSelectSeats, callMakePayment, callConfirmBooking) {
    console.log("Wellcome to BookMyShow!");
    callSearchMovie();
    callSelectSeats();
    callMakePayment();
    callConfirmBooking();
}

function searchMovie() {
    console.log("Searching for movies...");
}

function selectSeats() {
    console.log("Selecting seats...");
}

function makePayment() {
    console.log("Making payment...");
}

function confirmBooking() {
    console.log("Booking confirmed!");
}

bookMyShow(searchMovie, selectSeats, makePayment, confirmBooking);



