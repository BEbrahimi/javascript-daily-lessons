const students =[
    {id:1,name:"Fatima",score:90},
    {id:2,name:"Shamim",score:80},
    {id:3,name:"Bahara",score:81},
    {id:4,name:"Hajar",score:85},
    {id:5,name:"Roqia",score:95},
];

console.log("----- For Each ----");

students.forEach(student=>{
    console.log(`${student.id} | ${student.name} | ${student.score}`)
})


console.log("---- Map -----");

const names = students.map(student=>student.name);
console.log(names)

console.log("---- Filter -----");


const passed = students.filter(student=>student.score>=85)
console.log(passed)