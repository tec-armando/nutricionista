const carrosselContainer = document.querySelector(".carrossel-container")
const carrosselItems = document.querySelectorAll(".carrossel-item")
const carrosselControlsContainer = document.querySelector(".carrossel-controls")


function clientWidth() {
  let largura =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
    console.log(largura)
    return largura
}



window.addEventListener("load", screenWidth)
function screenWidth() {
  let largura = clientWidth()
  let carrossel = document.querySelector(".container-depositions")
  
  if (largura > 768) {
    carrossel.style.display = "block"
    carrosel.setControls()
    carrosel.setNav()
    carrosel.setInitialState()
    carrosel.useControls()
  }
}

const carrosselControls = ["<", ">"]
class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container
    this.carouselArray = [...items]
    this.carouselControls = controls
  }
  setInitialState() {
    this.carouselArray[0].classList.add("carrossel-item-first")
    this.carouselArray[1].classList.add("carrossel-item-previous")
    this.carouselArray[2].classList.add("carrossel-item-selected")
    this.carouselArray[3].classList.add("carrossel-item-next")
    this.carouselArray[4].classList.add("carrossel-item-last")
    document.querySelector(".carrossel-nav").childNodes[0].className =
      "carrossel-nav-item carrossel-item-first"
    document.querySelector(".carrossel-nav").childNodes[1].className =
      "carrossel-nav-item carrossel-item-previous"
    document.querySelector(".carrossel-nav").childNodes[2].className =
      "carrossel-nav-item carrossel-item-selected"
    document.querySelector(".carrossel-nav").childNodes[3].className =
      "carrossel-nav-item carrossel-item-next"
    document.querySelector(".carrossel-nav").childNodes[4].className =
      "carrossel-nav-item carrossel-item-last"
  }
  setCurrentState(target, selected, previous, next, first, last) {
    selected.forEach(el => {
      el.classList.remove("carrossel-item-selected")
      if (target.className == "carrossel-controls-<") {
        el.classList.add("carrossel-item-next")
      } else {
        el.classList.add("carrossel-item-previous")
      }
    })
    previous.forEach(el => {
      el.classList.remove("carrossel-item-previous")
      if (target.className == "carrossel-controls-<") {
        el.classList.add("carrossel-item-selected")
      } else {
        el.classList.add("carrossel-item-first")
      }
    })
    next.forEach(el => {
      el.classList.remove("carrossel-item-next")
      if (target.className == "carrossel-controls-<") {
        el.classList.add("carrossel-item-last")
      } else {
        el.classList.add("carrossel-item-selected")
      }
    })
    first.forEach(el => {
      el.classList.remove("carrossel-item-first")
      if (target.className == "carrossel-controls-<") {
        el.classList.add("carrossel-item-previous")
      } else {
        el.classList.add("carrossel-item-last")
      }
    })
    last.forEach(el => {
      el.classList.remove("carrossel-item-last")
      if (target.className == "carrossel-controls-<") {
        el.classList.add("carrossel-item-first")
      } else {
        el.classList.add("carrossel-item-next")
      }
    })
  }
  setNav() {
    carrosselContainer.appendChild(document.createElement("ul")).className =
      "carrossel-nav"
    this.carouselArray.forEach(item => {
      const nav = carrosselContainer.lastElementChild
      nav.appendChild(document.createElement("li"))
    })
  }
  setControls() {
    this.carouselControls.forEach(control => {
      carrosselControlsContainer.appendChild(
        document.createElement("button")
      ).className = `carrossel-controls-${control}`
    })
    !!carrosselControlsContainer.childNodes[0]
      ? (carrosselControlsContainer.childNodes[0].innerHTML =
          this.carouselControls[0])
      : null
    !!carrosselControlsContainer.childNodes[1]
      ? (carrosselControlsContainer.childNodes[1].innerHTML =
          this.carouselControls[1])
      : null
  }
  useControls() {
    const triggers = [...carrosselControlsContainer.childNodes]
    triggers.forEach(control => {
      control.addEventListener("click", () => {
        const target = control

        const selectedItem = document.querySelectorAll(
          ".carrossel-item-selected"
        )
        const previousSelectedItem = document.querySelectorAll(
          ".carrossel-item-previous"
        )
        const nextSelectedItem = document.querySelectorAll(
          ".carrossel-item-next"
        )
        const firstCarouselItem = document.querySelectorAll(
          ".carrossel-item-first"
        )
        const lastCarouselItem = document.querySelectorAll(
          ".carrossel-item-last"
        )
        this.setCurrentState(
          target,
          selectedItem,
          previousSelectedItem,
          nextSelectedItem,
          firstCarouselItem,
          lastCarouselItem
        )
      })
    })
  }
}
const carrosel = new Carousel(
  carrosselContainer,
  carrosselItems,
  carrosselControls
)

var touchend = 0
var touchstart = 0
var left = '<button class="carrossel-controls-<">&gt;</button>'
