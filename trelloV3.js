// todo is Object(there are propertys and methods) in Javascript. hi, class is different and i will learn in other lesson
let todo = {
    days: "Monday",
    meetings: 0,
    meetingDone: 0,

    addMeeting: function(number = 0) {
        this.meetings += number;
    },

    addMeetingDone: function(number = 0) {
        this.meetingDone += number;
    },

    addDay: function(days ="") {
        this.days = days;
    },

    sumOfMeeting: function() {
        return this.meetings - this.meetingDone;
    },

    callThis: function() {
            console.log(this);
    },

    resetMeeting: function() {
        this.days = "Monday",
        this.meetings = 0,
        this.meetingDone = 0
    }

};
todo.addMeeting(10);
todo.addMeetingDone(2);
todo.addDay("Friday");
console.log(todo.callThis() + 'before reseting: ');
//todo.resetMeeting();
//console.log(todo.callThis() + 'after reseting: ');

console.log(todo.days);
console.log(todo.sumOfMeeting());