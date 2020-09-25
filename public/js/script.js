// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let snares = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let hiHats = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];
let rideCymbals = [false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, ];


const toggleDrums = (arr, index) => {
  let currentId = arr[index];
  let newId = !currentId;   
  
  return newId;
}

console.log(toggleDrums(kicks, 1))


  

  