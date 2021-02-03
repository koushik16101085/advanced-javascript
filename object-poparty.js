const students = [
    {id:21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}
];
const output=[];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element);
    
}
console.log(output);
const names = students.map(s=>s.name)
console.log(names);

const ides = students.map(s=>s.id)
console.log(ides);

const bigger = students.filter(s=>s.id>40);
console.log(bigger);
const bigger1 = students.find(s=>s.id>40);
console.log(bigger1);