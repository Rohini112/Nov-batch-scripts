const s1 = {
    name: "anu",
    age : 24,
    fees: 3500.0,
    Work_Exper: {
        XYZ: '3 month',
        ABC: '5months'
    },
    marks: {
        maths: 89,
        science: 90,
    },
    Percentage: ['sem1:86', 'sem2:78', 'sem3:80'],
    Performance: ()=> console.log("Good"),
}

console.log(s1.name, s1.age, s1.fees);
console.log(s1.Percentage.sem1);
console.log(s1.marks.maths);