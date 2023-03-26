

$(".buttonBarMenu").on({
    click: function() {
        switch ($(this).get(0).id) {
            case "homePage":
                window.location.href = "./index.html";
                break;
            case "goals":
                window.location.href = "./goals.html";
                break;
            case "sources":
                window.location.href = "./sources.html";
                break;
        }
    }
});

window.addEventListener("DOMContentLoaded", (load) => {
    let searchStr = $("#searchBar");


    function submitEvent() {
        localStorage.setItem("search", searchStr[0].value);
    }

    $(".searchText").on({
        click: function () {
            searchSubmit.submit();
            submitEvent();
        }
    });
});