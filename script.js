
function menuControl() {

    let menuBtn = document.querySelectorAll(".menu-btn")

    menuBtn.forEach((each) => {


        each.addEventListener("click", () => {
            document.querySelector(".navlist").classList.toggle("open")
            document.querySelector(".phone-nav .sautaboy.index-page ").classList.toggle("open")
        })

    })
}
menuControl()




let elemContainer = document.querySelector(".elem-container")
let fixedImageDiv = document.querySelector("#fixed-image")

let allElem = document.querySelectorAll("#page-3 .elem")


allElem.forEach((eachElem) => {
    eachElem.addEventListener("mouseenter", (e) => {
        let image = eachElem.getAttribute("data-image")

        if (window.innerWidth <= "920") {
            fixedImageDiv.style.display = "none"
        }
        else {
            fixedImageDiv.style.display = "block"
            fixedImageDiv.style.backgroundImage = `url(${image}`
        }

    })
    eachElem.addEventListener("mouseleave", (e) => {
        fixedImageDiv.style.display = "none"
    })
})


if (window.innerWidth <= "920") {

    allElem.forEach((eachElem) => {
        let image = eachElem.getAttribute("data-image")
        fixedImageDiv.style.display = "none"
        img = eachElem.querySelector("img")
        img.src = `${image}`

        fixedImageDiv.style.backgroundImage = `none`
        fixedImageDiv.style.display = "none"
    })

}




let allH1 = document.querySelectorAll("#page-4 #left h1")
let imageBackground = document.querySelector("#page-4 #right #image")
let paragraph = document.querySelector("#page-4 #left p");

let firstImage = allH1[0].getAttribute("image")
imageBackground.style.backgroundImage = `url(${firstImage})`
let firstContent = allH1[0].getAttribute("content")
paragraph.textContent = firstContent
allH1[0].style.opacity = 1

allH1.forEach((eachH1) => {
    let image = eachH1.getAttribute("image")
    let paragraphContent = eachH1.getAttribute("content")


    eachH1.addEventListener("click", (e) => {

        allH1.forEach((h1) => {
            h1.style.opacity = 0.5
        })

        imageBackground.style.backgroundImage = `url(${image}`
        paragraph.textContent = paragraphContent
        e.target.style.opacity = 1
    })
})











function loader() {
    let loaderPage = document.querySelector(".loader")

    setTimeout(() => {
        loaderPage.style.top = "-100%"
    }, 4000)

}
loader()


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


