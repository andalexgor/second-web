

let bibis = document.querySelector('#move-card-rigth')
let bibis2 = document.querySelector('#move-card-rigth2')
let yellow = document.querySelectorAll('.card')
let id = document.querySelector('#id2')
let id2 = document.querySelector('#id3')
let id3 = document.querySelector('#id4')
let px = 1
bibis.onclick = function () {

    id2.style.background = 'green'
    id3.style.zIndex = 9
    id2.style.zIndex = 10

    let timerId = setInterval(() => {

        id2.style.left = px + 'px'

        px += 1
        console.log(px)

    }, 1);



    setTimeout(() => {
        clearInterval(timerId); {
            console.log('stop')
        };
    }, 5000);


}
bibis2.onclick = function () {

    id2.style.background = 'green'
    id3.style.zIndex = 9
    id2.style.zIndex = 10

    let timerId = setInterval(() => {

        id2.style.left = px + 'px'

        px -= 1
        console.log(px)

    }, 1);



    setTimeout(() => {
        clearInterval(timerId); {
            console.log('stop')
        };
    }, 5000);


}







