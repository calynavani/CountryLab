//Use TS when you need/want strong typing
//Examples of when you want strong typing:
//Databases, File Input/Outputs, Certain JavaScript Frameworks
//When you don't care about strong typin guse JS
//Mostly for front-end JavaScript and smaller JS tasks
class Student{
    name:string;
    hometown:string;
    favoriteFood:string;
    constructor(name:string, hometown:string, favoriteFood:string){
        this.name = name;
        this.hometown = hometown;
        this.favoriteFood = favoriteFood;
    }
}
//Like in C#, an array can be of any type built in or user created
let classMates : Student[] = [];
//Push functions like add for C# lists, it will add the new eleement to the final spot in the array
classMates.push(new Student("Calyn", "Portage,MI", "Tator Tots"));
classMates.push(new Student("Shawn", "Detroit,MI", "Chicken Alfredo"));
classMates.push(new Student("Calemore", "Battle Creek,MI", "Fried Chicken"));
classMates.push(new Student("Denise", "Detroit,MI", "Salmon"));
classMates.push(new Student("Lawanda", "Detroit,MI", "Shrimp"));

//JavaScript will allow you to print your array directly
//Do this when debugging
console.log(classMates);

//ince we're doing DOM manipluation we don't need a return type
function LearnAboutStudent(): void{
    let index : number = document.getElementById("ClassMate").value;
    let stu : Student = classMates[index];

    let info:string = document.getElementById("Info").value;
    let output:string = `Name: ${stu.name}`;
    if(info === "hometown"){
        output += `Home Town: ${stu.hometown}`;       
    }
    else{
        output += `Favorite Food: ${stu.favoriteFood}`;
    }

    document.getElementById("Output").innerText = output;
    
}