const feedback = {
    name: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: /^.{5,}$/
}

const newDiv = $("<div class=\"container card\" style=\"width:500px\">\n" +
    "    <div class=\"mb-3 mt-3\">\n" +
    "        <label for=\"email\" class=\"form-label\">Email:</label>\n" +
    "        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\n" +
    "    </div>\n" +
    "    <label for \"comment\">Comments:</label>\n" +
    "    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"text\"></textarea>\n" +
    "    <br>\n" +
    "    <button id=\"submitBtn\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "    <br>\n" +
    "</div>");

const submittedDiv = $("<h3 class='text-center'>Thanks for your Feedback, here is a button to start a simple game</h3>" +
    "<center><button id=\"startGame\" type=\"submit\" class=\"btn btn-primary\"><a href='../html/Drag&Drop.html'>Start Game</button></center>");
const ids = ["python", "java", "c#", "c++", "go"];
const scrollButtonPython = document.getElementById(ids[0]);
const scrollButtonJava = document.getElementById(ids[1]);
const scrollButtonCSharp = document.getElementById(ids[2]);
const scrollButtonCPP = document.getElementById(ids[3]);
const scrollButtonGO = document.getElementById(ids[4]);
const targetSectionPython = document.getElementById('Pythont');
const targetSectionJava = document.getElementById('javat');
const targetSectionCSharp = document.getElementById('csharpt');
const targetSectionCPP = document.getElementById('cppt');
const targetSectionGO = document.getElementById('got');

scrollButtonPython.addEventListener('click', () => {
    targetSectionPython.scrollIntoView({ behavior: 'smooth' });
});
scrollButtonJava.addEventListener('click', () => {
    targetSectionJava.scrollIntoView({ behavior: 'smooth' });
});
scrollButtonCSharp.addEventListener('click', () => {
    targetSectionCSharp.scrollIntoView({ behavior: 'smooth' });
});
scrollButtonCPP.addEventListener('click', () => {
    targetSectionCPP.scrollIntoView({ behavior: 'smooth' });
});

scrollButtonGO.addEventListener('click', () => {
    targetSectionGO.scrollIntoView({ behavior: 'smooth' });
});

function createFeedback() {
    $("#Feedback").replaceWith(newDiv);
    $("#submitBtn").on("click", function () {
        submitFeedback();
    });
}

function checkEmailMsg(email) {
    return feedback.name.test(email);
}

function submitFeedback() {
    if (!checkEmailMsg(document.querySelector('input').value)) {
        alert("Email, or Message is/are incorrect")
    } else {
        const audio = new Audio("../audio/audio1.mp3");
        audio.play();
        $(newDiv).replaceWith(submittedDiv);
    }
}

function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
