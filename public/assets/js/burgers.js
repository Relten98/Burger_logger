$(function () {

    // Changes the state of whether it was eaten.
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("newEaten");

        var newEatenState = {
            devoured: newEaten
        };

        // Send the PUT request.
        $.ajax("/api/borger/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed devoured to", newEaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-borger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var createborger = {
            name: $("#submit-button").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/borger", {
            type: "POST",
            data: createborger
        }).then(
            function () {
                console.log("made new borger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

$(".eat-borger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/borger/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("Ate borger", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});