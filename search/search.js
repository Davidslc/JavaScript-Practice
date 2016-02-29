var info = [
    {
        name: "Harry",
        age: 26,
        country: "US",
        skill: "Web Development"
    },
    {
        name: "Moe",
        age: 28,
        country: "UK",
        skill: "Web Design"
    },
    {
        name: "Curly",
        age: 31,
        country: "Canada",
        skill: "Writing"
    },
    {
        name: "Emily",
        age: 24,
        country: "US",
        skill: "Chemical Engineering"
    }
];

while (true) {
    var input = prompt("Enter the name or type 'quit' to exit");
    input = input.toLowerCase();

    if (input === 'quit') {
        document.write("<h2>Closing the application</h2>");
        break;
    }
    else if (input === "") {
        alert("Enter a valid name");
    } else {
        break;
    }
}
    for (var i = 0; i < info.length; i++) {
        if (info[i]['name'].toLowerCase() === input) {
            document.write("Student: " + info[i]['name'] + '<br>');
            document.write("Age: " + info[i]['age'] + '<br>');
            document.write("Country: " + info[i]['country'] + '<br>');
            document.write("Skill: " + info[i]['skill'] + '<br>');
        }
    }

