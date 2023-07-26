document.querySelectorAll(".dlt-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("first");
        var id = button.getAttribute("data-id");
        var url = `${window.location.origin}/api/users/${id}`;

        if (confirm("Do you really want to delete this record?")) {
            fetch(url, {
                method: "DELETE",
            })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(function (response) {
                alert("Data deleted successfully!");
                location.reload();
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
        }
    });
});