function calculateTrip()
{
    //get length of trip in miles
    var tripLengthMiles = prompt("How long is your trip in miles?");

    //convert to a number
    tripLengthMiles = parseFloat(tripLengthMiles);

    //get mpg of vehicle
    var mpg = prompt("What mpg does your vehicle get?");

    // convert to a number
    mpg = parseFloat(mpg);

    // get the $/gallon of gas
    var dollarsPerGallon = parseFloat(prompt("How much is gas?"));  //this one is just putting both lines into one

    // convert to number


    // get average mph driven
    var mph = parseInt(prompt("What is your average speed?"));

    // convert to number



    // find total gallons by dividing miles by mpg
    var totalGallons = tripLengthMiles/mpg;

    //find total gas cost by total gallons * $/gallon
    var totalGasCost = totalGallons*dollarsPerGallon;

    // divide miles of trip by mph to find total hours
    var totalHours = tripLengthMiles/mph;

    var totalGasCostDisplay = totalGasCost.toFixed(2);
    var totalHoursDisplay = totalHours.toFixed(1);


    //output total gas cost
    alert("You will spend " + totalGasCostDisplay + " on gas.");

    // output hours of trip
    alert("Your trip will take " + totalHoursDisplay + " hours.");


}

