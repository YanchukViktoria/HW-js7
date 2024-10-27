const arr = [5, 6, 27];
arr[1] = 10;

const arr1 = [`mmmmmm`, `fffff`, `nnnn`]
arr1[arr1.length] = `ppppppp`;


const count = arr.reduce((acc, curVal) => acc + curVal, 0);


const arr2 = [5, 6, 7, 3, 5];

for (let i = 0; i < arr2.length; i++){
    let p = document.createElement(`p`);
    document.body.appendChild(p);
    p.textContent = arr2[i];
};


const arr3 = [`ii`, `wwwwwww`, `nnnnnnnn`, `llll`, `ppppp`];

arr3.map((el) => {
    if (el.length >= 5) {
        let p2 = document.createElement(`p`);
        document.body.appendChild(p2);
        p2.textContent = el;
    }
});


const arr4 = [5, 63, 8, 94, 102, 20, 54, 368, 10, 2];

let p3 = document.createElement(`p`);
document.body.appendChild(p3);
p3.textContent = Math.max(...arr4);


const arr5 = [56, 23, 48, 59, 24, 58, 354, 15, 205, 89];

arr5.map((el) => {
    if (el % 2 === 0) {
        let p3 = document.createElement(`p`);
        document.body.appendChild(p3);
        p3.textContent = el;
    }
})