
// let js = 'Amazing';
// if (js === 'Amazing') alert('javascript is Fun!!');


// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// //Declaring first name 
// let firstName = 'Ebuka';
// console.log(firstName);

// //let this house be the first part

// let myFirstJob = 'programmer';
// // let myCurrentJob = 'teacher';

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 'jonas');
// console.log(typeof 23);

//Math Operators

// const futureYear = 2037;
// const russoAge = futureYear - 1995;
// const danielAge = futureYear - 2000;
// console.log(russoAge, danielAge);

// console.log(russoAge * 2, danielAge / 10, 2 ** 3);
// //2**3 means 2 to the power of 3, which is 2*2*2


// const firstName = 'Ebuka';
// const lastName = ' Ogidi ';
// console.log(firstName + lastName);


// //Assignment operators
// let x = 10 + 5 //15
// x += 10 // x = x + 10 = 25
// x *= 4 // x= x * 4 =100 
// x++; // x= x +1 
// x--; //x =x-1 
// x--;

// console.log(x);

// //Comparison operators; to produce boolean values.
// console.log(russoAge > danielAge); //>,<,>=,<=
// console.log(danielAge >= 18);
// console.log(russoAge <= 18);

// const isFullAge = danielAge >= 18;

//bmi = mass / height ** 2 = mass / (height * height)

//Store mark and john.s heights in variables

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;




// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// //Calculate both bmis using the formula above
// const BmiMark = massMark / heightMark ** 2;
// const BmiJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBmi = BmiMark > BmiJohn;
// const johnHigherBmi = BmiJohn > BmiMark;


// const markHigherBmi = BmiMark > BmiJohn;
// console.log(BmiJohn, BmiMark, markHigherBmi);

// //









// //Creating a Boolean variable


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1995;
// const year = 2037;

// const jonasNew = `i'm ${firstName} , a
//  ${year - birthYear} year old ${job} !`;

// console.log(jonasNew);

// console.log(`i am a regular string.....`);

// console.log('string with \n\
// multiple \n\
// lines');

// console.log(`string 
// multiple
// lines`);


// const age = 15;
// // const isOldEnough = age >= 18;
// if (age >= 18) {
//     console.log('sarah can start driving license 🚗');
// } else {
//     const yearsleft = 18 - age;
//     console.log(`Sarah is too young.Wait another ${yearsleft} years 😜`);
// }

// const birthYear = 1998;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);






// onst massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// //Calculate both bmis using the formula above
// const BmiMark = massMark / heightMark ** 2;
// const BmiJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBmi = BmiMark > BmiJohn;
// const johnHigherBmi = BmiJohn > BmiMark;

// //if/Else statements

// if (markHigherBmi > johnHigherBmi) {
//     console.log(`mark's Bmi is higher than john's `);
// } else {
//     console.log(`john's Bmi is higher than Marks`);
// }

// if (markHigherBmi < johnHigherBmi) {
//     console.log(`mark's Bmi is higher than john's `);
// } else {
//     console.log(`john's Bmi is higher than Marks`);
// }


// //Type conversion 
// const inputyear = `1991`;
// console.log(Number(inputyear), inputyear);
// console.log(Number(inputyear) + 18);

// console.log(Number('jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);



//Type coercion 

//falsy values ; 0,'',undefined,null, NaN .



// const money = 0;
// if (money) {
//     console.log('Dont spend it all ');
// } else {
//     console.log('You should get a job !');
// }

// let height;
// if (height) {
//     console.log('YAY! Height is deFined ');
// } else {
//     console.log('Height is UNDEFINED')
// }


// const age = '18';
// if (age === 18) console.log('you just became an adult (strict )');

// if (age == 18) console.log('you just became an adult (loose ) '); 



// const favourite = Number(prompt('what is your favourite number ?'));
// console.log(favourite)
// console.log(typeof favourite);

// if (favourite === 23) {// 22===23-->FALSE
//     console.log('Cool 23 is an amazing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if (favourite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }
// //different


// const hasDriverLicense = true;//A
// const hasGoodVision = true;//B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// // const shouldDrive = hasDriverLicense && hasGoodVision;
// // if (hasDriverLicense && hasGoodVision) {
// //     console.log('sarah is able to drive!')
// // } else {
// //     console.log('someone else should drive..')
// // }

// const isTired = false; // C
// console.log(hasDriverLicense || hasGoodVision || isTired);

// // const shouldDrive = hasDriverLicense && hasGoodVision && isTired;

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('sarah is able to drive!')
// } else {
//     console.log('someone else should drive..')
// }



// //question 1
// const dolphins = (97 + 108 + 89);
// const koalas = (88 + 91 + 110);

// const averageDolphins = Math.round(dolphins / 3);
// const averageKoalas = Math.round(koalas / 3);
// const draw = averageDolphins === averageKoalas;

// //2

// if (averageDolphins > averageKoalas) {
//     console.log('Dolphins are the Winners🏆');
// } else if (averageKoalas > averageDolphins) {
//     console.log('Koalas are your Winners🏆');
// } else if (averageDolphins === averageKoalas) {
//     console.log('Both win the trophy!');
// }



// Bonus 2 

// const scoreDolphins = (97 + 112 + 81);
// const scoreKoalas = (109 + 95 + 86);
// const averageDolphins = Math.round(scoreDolphins / 3);
// const averageKoalas = Math.round(scoreKoalas / 3);
// console.log(averageDolphins, averageKoalas);


// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log('Dolphin are the Winners 🏆')
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log('Koalas are the winners 🏆')
// } else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
//     console.log('Both win the trophy 🏆')
// } else {
//     console.log('No one else wins the trophy')
// }


