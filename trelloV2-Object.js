let todo = {
     days: "Monday",
     meetings: 0,
     meetingDone: 0,

};

let addMeeting = function(todo, number = 0) { // default = 0
     todo.meetings += number;
}

let meetingDone = function(todo, number = 0) {
     todo.meetingDone += number;
}

let addDay = function(todo, day) {
     todo.days = day; 
}

let sumOfMeeting = function(todo) {
     return todo.meetings - todo.meetingDone;
}

// addMeeting(todo, 2);
// meetingDone(todo, 1);
// addDay(todo, "Friday");

// console.log(todo);
