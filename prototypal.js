'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function Employee(title) {
    this.title = title
}

Employee.prototype.setTitle = function (title) {
    this.title = title
}

Employee.prototype.getTitle = function () {
    return this.title
}

function Engineer(title, isManager) {
    Employee.call(this, title)
    this.isManager = isManager
}

Engineer.prototype = Object.create(Employee.prototype, {
    constructor: {
        value: Engineer,
        enumerable: true,
        writable: true,
        configurabe: true

    }
})

Engineer.prototype.setIsManager = function (value) {
    this.isManager = value
}

Engineer.prototype.getIsManager = function () {
    return this.isManager
}

