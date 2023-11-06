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
    "<button onclick='startGame()' id=\"startGame\" type=\"submit\" class=\"btn btn-primary\">Start Game</button>")

const gameDiv = $(`
        <div class="container">
            <h1>Match the Countries with Their Capitals</h1>
            
            <div class="category" id="category1">
                    <div class="item" id="item1" draggable="true" data-match="target1">Python</div>
                <div class="item" id="item2" draggable="true" data-match="target2">Java</div>
                <div class="item" id="item3" draggable="true" data-match="target3">C#</div>
            </div>

            <div class="category" id="category2">
                <div class="item" id="target1" data-match="item1">Django</div>
                <div class="item" id="target2" data-match="item2">Spring</div>
                <div class="item" id="target3" data-match="item3">.NET</div>
            </div>
            
            <p id="result"></p>
        </div>
        `);

function createFeedback() {
    $("#Feedback").replaceWith(newDiv);
    $("#submitBtn").on("click", function () {
        submitFeedback();
    });
}

function checkEmailMsg(email, msg) {
    if (feedback.name.test(email)) {
        return feedback.message.test(msg);
    } else {
        return false;
    }
}

function submitFeedback() {
    $(newDiv).replaceWith(submittedDiv);
}

function startGame() {
    const gameContainer = $("#gameContainer");
        gameContainer.html(gameDiv);

    $(".item").on("dragstart", function (e) {
        e.originalEvent.dataTransfer.setData("text", e.target.id);
    });

    function checkMatch() {
        let correct = 0;
        $(".item").each(function () {
            const matchId = $(this).data("match");
            if ($(this).parent().attr("id") === "category2" && $(this).attr("id") === matchId) {
                correct++;
            }
        });

        if (correct === $(".item").length) {
            $("#result").text("Congratulations! You matched all the countries with their capitals!");
        }
    }

    $("#category2").on("drop", function (e) {
        e.preventDefault();
        const data = e.originalEvent.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
        e.target.style.backgroundColor = "#99FF99";
        checkMatch();
    });
}
