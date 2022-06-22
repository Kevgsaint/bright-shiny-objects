// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
//////////////////////////////////////////////////////////////////////////////////////////////
// 1. 


function createUser(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user
}

console.log(createUser('Harry', 'Potter'))
console.log(createUser('Jimmy', 'Persons'))

//////////////////////////////////////////////////////////////////////////////////////////////
//2.




function setAge(user, age) {
    
    user.age = age;
    return user;
}


console.log(setAge(createUser('Harry', 'Potter'), 19))


console.log(setAge({
    firstName: 'Bob',
    lastName: 'Nothings'
}, 31))


let testUser = {
    firstName: "Test",
    lastName: "User"
}
console.log(setAge(testUser, 25));









//////////////////////////////////////////////////////////////////////////////////////////////
// 3. 






function incrementAge(user) {
    user.age = user.age + 1;
    return user;
}
console.log(incrementAge(testUser))




//////////////////////////////////////////////////////////////////////////////////////////////
// 4. 

function fixCar() {
    car.needsMaintenance = false;
    return car;
}

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true
}

console.log(fixCar(car));

//////////////////////////////////////////////////////////////////////////////////////////////
// 5.

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

function addGrades(student, newGrades) { 
    
   
    for (let i = 0; i < newGrades.length; i++) {
        student.grades.push(newGrades[i]);
    }
    return student;
}

console.log(addGrades(student, newGrades)); 


//////////////////////////////////////////////////////////////////////////////////////////////
// 6.

const car2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: false
};


function getDataType(banana, apple) { 
    return typeof banana[apple] 
}

console.log("\n Get data type \n")
console.log(getDataType(car2, 'make'));
console.log(getDataType(car2, 'model'));
console.log(getDataType(car2, 'year'));
console.log(getDataType(car2, 'needsMaitenance'));

//////////////////////////////////////////////////////////////////////////////////////////////
//7.




const todos = [{
        title: 'Get gas',
        isComplete: false
    },
    {
        title: 'Buy bread',
        isComplete: true
    }
];

const newTodo = {
    title: 'Call mom',
    isComplete: false
};


function addTodo(todos, newTodo) {

    todos.push(newTodo);

    return todos
}

console.log(addTodo(todos, newTodo));


////////////////////////////////////////////////////////////////////////////////
// 8. 

console.log("")


const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [{
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};


const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
}


function addSong(playlist, newSong) {

    playlist.songs.push(newSong);
    playlist.duration = playlist.duration + newSong.duration;
    return playlist
}

console.log(addSong(playlist, newSong))



////////////////////////////////////////////////////////////////////////////////
// 9.

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};


function updateReportCard(reportCard, newGrade) {
    let total = 0;

    if (newGrade < reportCard.lowestGrade) {
        reportCard.lowestGrade = newGrade;
    } else if (reportCard.highestGrade < newGrade) {
        reportCard.highestGrade = newGrade;
    }
    reportCard.grades.push(newGrade); 

    
    for (let i = 0; i < reportCard.grades.length; i++) {
        total += reportCard.grades[i]
    }
    
    reportCard.averageGrade = (total / reportCard.grades.length);
    console.log(total) 
    return reportCard;
}

console.log(updateReportCard(reportCard, 62))
console.log(updateReportCard(reportCard, 100))







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
