let position = 0
const slidesToShow = 3
const slideToScroll = 1
const container = document.querySelector('.slider-container')
const track = document.querySelector('.cards')
const btnPrev = document.querySelector('#move-card-rigth')
const btnNext = document.querySelector('#move-card-left')
const items = document.querySelectorAll('.card')
const itemsCount = items.length
const itemWidth = (container.clientWidth) / slidesToShow
const movePosition = slideToScroll * itemWidth


// items.forEach((item) => {
//     item.style.minWidth=`${itemWidth}px`
// });

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth
    setPosition()
    chechBtns()
})


btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth
    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth
    setPosition()
    chechBtns()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}
const chechBtns = () => {
   btnPrev.disabled = position === 0
   btnNext.disabled = position <=-(itemsCount-slidesToShow)*itemWidth
}

chechBtns()
