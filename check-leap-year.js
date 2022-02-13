function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log("This is a Leap Year");
    }
    else{
        console.log("This is not a leapyear")
    }
}
var result=checkLeapYear(2024);
console.log(result);