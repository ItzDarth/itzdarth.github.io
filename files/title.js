if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = [ "⠀", "i", "i|", "i", "i|", "it", "it|", "it", "it|", "itz", "itz|", "itz", "itz|", "itzd", "itzd|", "itzd", "itzd|", "itzda", "itzda|", "itzda", "itzda|", "itzdar", "itzdar|", "itzdar", "itzdar|", "itzdart", "itzdart|", "itzdart", "itzdart|", "itzdarth", "itzdarth|", "itzdarth", "itzdarth|", "itzdart", "itzdar", "itzda", "itzd|", "itz", "it", "i", "⠀" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

