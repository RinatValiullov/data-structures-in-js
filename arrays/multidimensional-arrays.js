let twod = [];

const rows = 5;

for (let i = 0; i < rows; i++) {
    twod[i] = [];
}

// console.log(twod);

let grades = [[4, 5, 6], [7, 8, 9], [1, 2, 3]];

let total = 0;
let avg = 0.0;

for (let row = 0; row < grades.length; ++row) {
    // console.log(grades[row]);
    for (let col = 0; col < grades[row].length; ++col) {
        // console.log(grades[row][col]);
        total += grades[row][col];
    }
    console.log(total);
    avg = total / grades[row].length;
    console.log("Student " + parseInt(row + 1) + " average " + avg.toFixed(2));
}

// console.log("total: " + total);
