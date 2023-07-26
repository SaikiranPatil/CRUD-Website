document.getElementById("update-user").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var data = {};

    formData.forEach(function (value, key) {
        data[key] = value;
    });

    var id = data.id;
    var url = `${process.env.BASE_URL}:80/api/users/${id}`;

    fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(function (response) {
        alert("Data Updated Successfully!");
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
});