window.scrollDown = function () {
    let element = document.querySelector('.content');
    element.scrollIntoView({ 
        "behavior": "smooth",
        "block": "start"
    });
    console.log("Done");
}