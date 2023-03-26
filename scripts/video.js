

window.addEventListener("DOMContentLoaded", (load) => {

    let video = localStorage.getItem("video");
    let videoName = localStorage.getItem("videoName");
    let ytLink = localStorage.getItem("link");
    let author = localStorage.getItem("author");
    let main = $("#main");

    main.html(
        '<div>' +
            video +
        '</div>' +
        '<h1>' + videoName + '</h1>' +
        '<div class="text">' +
            'Author: ' + author + '<br>' +
            '<a href="' + ytLink + '"> link to the official video</a>' + 
            '<h3>' +
                'Comment:' +
            '</h3>' +
        '</div>' +
    '<div>' +'</div>');
    
});