document.getElementById("add-user").submit(function (event) {
    alert("Data inserted sucessfully");
})

document.getElementById("update-user").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })

    data.id=(window.location).href.substring(baseUrl.lastIndexOf('=') + 1)
    
    var request = {
        "url": "http://localhost:80/api/users/" + data.id,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("Data updated sucessfully")
    })
})

if (window.location.pathname == "/") {
    $ondelete = $(".sbt-btn");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data deleted sucessfully!");
                location.reload();
            })
        }
    });
}