var butt = document.querySelector("#buttonBook");


var mainImage = document.querySelector(".mainImage")
var mainText = document.querySelector(".mainText")




var planetTab = document.querySelectorAll(".planet")



const onLoad = () => {

    setTimeout(function() {
        mainImage.classList.add("FadeRight")

    }, 1000);

    mainText.classList.add("FadeLeft")




}


onLoad()


planetTab.forEach((e, i) => {
    setTimeout(function() {
        e.classList.add("FadeTop")


    }, i * 300);
})