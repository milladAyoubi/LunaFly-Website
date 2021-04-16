var butt = document.querySelector("#buttonBook");


var mainImage = document.querySelector(".mainImage")
var mainText = document.querySelector(".mainText")

var planetTab = document.querySelectorAll(".planet")



function loadContent() {

    var destinationHeight = document.querySelector(".Destinations")
    var bodyHeight = document.querySelector('body')
    var y = bodyHeight.scrollTop;
    var y1 = destinationHeight.getBoundingClientRect()
    console.log(y)
    console.log(y1.top)

    if (y1.top <= 235) {
        planetTab.forEach((e, i) => {
            setTimeout(function() {
                e.classList.add("FadeTop")


            }, i * 300);
        })

    }

}
const onLoad = () => {

    setTimeout(function() {
        mainImage.classList.add("FadeRight")

    }, 1000);

    mainText.classList.add("FadeLeft")

}







onLoad()