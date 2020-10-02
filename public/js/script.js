// Drum Arrays
let kicks = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let snares = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let hiHats = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let rideCymbals = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];


const toggleDrums = (arr, index) => {
  let currentId = arr[index];
  let newId = !currentId;   
  return arr[index] = newId;
};

const clear = (arr) => {
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === true){
     arr[i] = false;
   }
 }
 return arr;
}
clear(kicks);
console.log(kicks)







  









  