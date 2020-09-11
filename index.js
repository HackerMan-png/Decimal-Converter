let decimal = prompt("What is the your number.")


remainder1 = decimal % 16
decimal1  = decimal / 16
remainder2 = Math.floor(decimal1) % 16

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

    console.log(`${remainder2}${remainder1}`)