// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      //debugger;
    }
  
    return gifts;
  }
  
//wrapGifts(gifts);


function writeCards(arr, event) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr; 
}

function countDown(int) {
    while (int >= 0) {
        console.log(int); 
        int--; 
    }
}

countDown(10); 