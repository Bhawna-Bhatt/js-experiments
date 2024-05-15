let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];
//Write code that searches the courses array and display the results using the find() or filter() functions to determine:
//  When does the PROG200 course start?

//  What is the title of the PROJ500 course?

//  What are the titles of the courses that cost $50 or less?

//  What  classes meet in "Classroom 1"?

function StartDate(arrayValue) {
    if (arrayValue.CourseId == "PROG200"){
        return true;    }
    else  {
        return false;
    }

}

function FindingInfo(arrayValue) {
    if(arrayValue.CourseId =="PROJ500") {
        return true;
    }
    else {return false;}

}

function FindMany(arrayValue) {
    if (arrayValue.Location == "Classroom 1")
    {return true;}
    else {
        return false;
    }
}

let a = courses.find(StartDate);
console.log(`The start date for ${a.CourseId} is ${a.StartDate}`);
let b = courses.find(FindingInfo);
console.log(`The title of course ${b.CourseId} is ${b.Title}`);
let c = courses.filter(FindMany);
//console.log(c.length)
for (i=0;i<c.length;i++) {
console.log(`The courses conducted in Classroom 1 is ${c[i].Title}`);
}