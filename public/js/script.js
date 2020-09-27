// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let snares = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let hiHats = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let rideCymbals = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];


const toggleDrums = (arr, index) => {

  let toggledArray = [...arr];
  let currentId = arr[index];
  let newId = !currentId;   

  toggledArray[index] = newId;
  arr = toggledArray;
  
  return arr;
}

  console.log(toggleDrums(kicks, 18))
 console.log(kicks)









  