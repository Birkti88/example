let age = "20";
let hasDiploma = "true";
let examScore = "85";
let isEligible = age >= 18 && hasDiploma && examScore >= 80;

if(isEligible){
    console.log(`congrats you are eligible for the program`);
}
else{
    console.log(`sorry, you are not eligible for teh program`);
}