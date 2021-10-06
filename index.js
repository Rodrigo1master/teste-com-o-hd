

const courses = [
    {id: 1 , name: 'node.js'},
    {id: 2 , name: 'javaScript'},
];

courses.sort(function(a,b) {
    const nameA = a.name.toLocaleLowerCase();
    const nameB = b.name.toLocaleLowerCase();

    if (a.name < b.name) return-1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses)