// Drum Arrays
let kicks = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let snares = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let hiHats = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let rideCymbals = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];


const toggleDrums = (arr, index) => { 
  return arr[index] =! arr[index];
};

const clear = (arr) => {
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === true){
     arr[i] = false;
   }
 }
 return arr;
};

const invert = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] =! arr[i]
    };
    return arr;
}

toggleDrums(kicks, 1)
console.log(kicks)







  









  