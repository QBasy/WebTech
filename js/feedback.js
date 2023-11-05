const newDiv = $("<div class=\"container card\" style=\"width:500px\">\n" +
    "    <div class=\"mb-3 mt-3\">\n" +
    "        <label for=\"email\" class=\"form-label\">Email:</label>\n" +
    "        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\n" +
    "    </div>\n" +
    "    <label for=\"comment\">Comments:</label>\n" +
    "    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"text\"></textarea>\n" +
    "    <br>\n" +
    "    <button onclick=\"submitFeedback()\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "    <br>\n" +
    "</div>");

function createFeedback() {
    $("#Feedback").replaceWith(newDiv);
}

function submitFeedback() {
    $(newDiv).replaceWith("<h1 class='text-center'>Thanks for your Feedback)))</h1>");
}

