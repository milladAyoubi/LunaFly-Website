var butt = document.querySelector("#buttonBook");


var mainImage = document.querySelector(".mainImage")
var mainText = document.querySelector(".titleText")



var planetTab = document.querySelectorAll(".planet")
var city1attractionTab = document.querySelectorAll(".attractionText")
var city2attractionTab = document.querySelectorAll(".attractionText2")
var footer = document.querySelectorAll(".footerElement")




function loadContent() {

    var destinationHeight = document.querySelector(".Destinations")
    var bodyHeight = document.querySelector('body')
    var y = bodyHeight.scrollTop;
    var y1 = destinationHeight.getBoundingClientRect()
    console.log(y)


    if (y1.top <= 235) {
        planetTab.forEach((e, i) => {
            setTimeout(function() {
                e.classList.add("FadeBottom")


            }, i * 300);
        })

    }


    if (y >= 1420) {
        city1attractionTab.forEach((e, i) => {
            setTimeout(function() {
                e.classList.add("FadeAttractionRight")


            }, i * 500);
        })
    }


    if (y >= 2300) {
        city2attractionTab.forEach((e, i) => {
            setTimeout(function() {
                e.classList.add("FadeAttractionLeft")


            }, i * 500);
        })
    }


    if (y >= 3800) {
        footer.forEach((e, i) => {
            setTimeout(function() {
                e.classList.add("FadeBottom")


            }, i * 500);
        })
    }



}

mainImage.classList.add("FadeRight")
const onLoad = () => {

    setTimeout(function() {
        mainText.classList.add("FadeLeft")

    }, 1000);



}





onLoad()