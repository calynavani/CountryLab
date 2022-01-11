//Use TS when you need/want strong typing
//Examples of when you want strong typing:
//Databases, File Input/Outputs, Certain JavaScript Frameworks
//When you don't care about strong typin guse JS
//Mostly for front-end JavaScript and smaller JS tasks
var Student = /** @class */ (function () {
    function Student(name, hometown, favoriteFood) {
        this.name = name;
        this.hometown = hometown;
        this.favoriteFood = favoriteFood;
    }
    return Student;
}());
//Like in C#, an array can be of any type built in or user created
var classMates;
//Push functions like add for C# lists, it will add the new eleement to the final spot in the array
classMates.push(new Student("Calyn", "Portage,MI", "Tator Tots"));
classMates.push(new Student("Shawn", "Detroit,MI", "Chicken Alfredo"));
classMates.push(new Student("Calemore", "Battle Creek,MI", "Fried Chicken"));
classMates.push(new Student("Denise", "Detroit,MI", "Salmon"));
classMates.push(new Student("Lawanda", "Detroit,MI", "Shrimp"));
//JavaScript will allow you to print your array directly
//Do this when debugging
console.log(classMates);
