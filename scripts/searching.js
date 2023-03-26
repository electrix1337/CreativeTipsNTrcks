let data = {
    basic: {
        name: "basic",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LxgMdjyw8uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        author: "Kurzgesagt",
        videoName: 'We WILL Fix Climate Change!',
        ytLink: 'https://www.youtube.com/watch?v=LxgMdjyw8uw&ab_channel=Kurzgesagt%E2%80%93InaNutshell',
    },
    ham: {
        name: "basic",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LxgMdjyw8uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        author: "Kurzgesagt",
        videoName: 'We WILL Fix Climate Change!',
        ytLink: 'https://www.youtube.com/watch?v=LxgMdjyw8uw&ab_channel=Kurzgesagt%E2%80%93InaNutshell',
    },
    test: {
        name: "basic",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LxgMdjyw8uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        author: "Kurzgesagt",
        videoName: 'We WILL Fix Climate Change!',
        ytLink: 'https://www.youtube.com/watch?v=LxgMdjyw8uw&ab_channel=Kurzgesagt%E2%80%93InaNutshell',
    },
    salut: {
        name: "basic",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LxgMdjyw8uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        author: "Kurzgesagt",
        videoName: 'We WILL Fix Climate Change!',
        ytLink: 'https://www.youtube.com/watch?v=LxgMdjyw8uw&ab_channel=Kurzgesagt%E2%80%93InaNutshell',
    },
}
let forms = [];
let searchString = "";

window.addEventListener("DOMContentLoaded", (load) => {

    let searchStr = localStorage.getItem("search");
    let main = $("#main");
    console.log(searchStr);

    let html = "";

    let tab = Object.keys(data);
    console.log(tab);
    for (let i = 0; i < tab.length; ++i) {
        console.log(data[tab[i]])
        if (searchStr == data[tab[i]].name) {
            localStorage.setItem("video", data[tab[i]].video);
            localStorage.setItem("videoName", data[tab[i]].videoName);
            localStorage.setItem("link", data[tab[i]].ytLink);
            localStorage.setItem("author", data[tab[i]].author);
            html += 
                '<div class="videoContainer">' +
                    '<div>' +
                        '<a class="link" href="./video.html">' + data[tab[i]].videoName + "</a>" + 
                    '</div>' + 
                "</div>";
        }
    }

    main.html(html);
});