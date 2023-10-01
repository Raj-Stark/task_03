const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings:[],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} & flight num is ${this.iataCode}-${flightNum} `
    );

    this.bookings.push({name:name, flightNum:`${this.iataCode}-${flightNum}`})
  },
};


lufthansa.book(234,"Raj");
console.log(lufthansa.bookings);



const euroWings = {
    airline: "Euro Wings",
    iataCode:"EW",
    bookings:[],
}


const ans = lufthansa.book.bind(euroWings , 543 , "Anshu");

ans()