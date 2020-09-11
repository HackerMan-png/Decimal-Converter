let decimal = prompt("What is the your number.")


remainder1 = decimal % 16
decimal1  = decimal / 16
remainder2 = Math.floor(decimal1) % 16

// This will find the number for the second value that shows up
if(remainder1 == 10){
    remainder1 = "A"
}
if(remainder1 == 11){
    remainder1 = "B"
}
if(remainder1 == 12){
    remainder1 = "C"
}
if(remainder1 == 13){
    remainder1 = "D"
}
if(remainder1 == 14){
    remainder1 = "E"
}
if(remainder1 == 15){
    remainder1 = "F"
}
// This will find the value for the first value that shows up
if(remainder2 == 10){
    remainder2 = "A"
}
if(remainder2 == 11){
    remainder2 = "B"
}
if(remainder2 == 12){
    remainder2 = "C"
}
if(remainder2 == 13){
    remainder2 = "D"
}
if(remainder2 == 14){
    remainder2 = "E"
}
if(remainder2 == 15){
    remainder2 = "F"
}
if(remainder2 == 0){
    remainder2 = ""
}


console.log(`The hexadecimal for ${decimal} is: ${remainder2}${remainder1}`)

// Sets all the numbers for the binary to 0
let binary1 = 0;
let binary2 = 0;
let binary3 = 0;
let binary4 = 0;
let binary5 = 0;
let binary6 = 0;
let binary7 = 0;
let binary8 = 0;

// This part is like a filter, if the number is big enough to touch one part some of it will be removed so its small enough to go through to the next smaller filter.
let finalDecimal = decimal
if(decimal >= 128)
{
	decimal -= 128;
	binary1=1;    
}
if(decimal >= 64)
{
	decimal -= 64;
	binary2 = 1;
}
if(decimal >= 32)
{
	decimal -= 32;
	binary3 = 1;
}
if(decimal >= 16)
{
	decimal -= 16;
	binary4 = 1;
}
if(decimal >= 8)
{
	decimal -= 8;
	binary5 = 1;
}
if(decimal > 4)
{
	decimal -= 4;
	binary6 = 1;
}
if(decimal >= 2)
{
	decimal -= 2;
	binary7 = 1
}
if(decimal >= 1)
{
	decimal -= 1;
	binary8 = 1;
}

// If the number is small enough, theres no need to show the first set of zeros (Example: 0000 1010)
if(binary1 + binary2 + binary3 + binary4 == 0){
	console.log(`The binary for ${finalDecimal} is: ${binary5}${binary6}${binary7}${binary8}`)
}
else{
	console.log(`The binary for ${finalDecimal} is: ${binary1}${binary2}${binary3}${binary4} ${binary5}${binary6}${binary7}${binary8}`);
}
