var butt = document.querySelector("#buttonBook");


var mainImage = document.querySelector(".mainImage")
var mainText = document.querySelector(".mainText")


var planetTab = document.querySelector("#destinations")


const onLoad = () => {

    setTimeout(function() {
        mainImage.classList.add("FadeRight")

    }, 1000);

    mainText.classList.add("FadeLeft")
    planetTab.classList.add("FadeLeft")



}


onLoad()