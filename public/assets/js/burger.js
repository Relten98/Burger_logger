// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {

        let id = $(this).data("id");

        let newConsumed = $(this).data("newdevoured");

        let newConsumedState = {
            devoured: newConsumed
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newConsumedState
        }).then(
            function () {
                console.log("changed devoured to", newConsumed);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#bu").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

$(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});