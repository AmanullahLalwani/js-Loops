console.log("siuuuu")


// for loop

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

// for in loop

let obj = {
    name: "cr7",
    role: "footballer",
    number: "7"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)

}

// for of loop

for (const c of "aman") {
    console.log(c)

}

// while loop

// let i = 0;

// while (i < 6) {
//     console.log(i)
//     i++;

// }

// do while loop

let i = 10;

do {
    console.log(i)
    i++;
} while (i < 6);





