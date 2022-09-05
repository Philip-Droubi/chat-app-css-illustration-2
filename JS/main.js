let price = document.querySelectorAll(".price")
let input = document.querySelectorAll(".circle")


price.forEach(function (el) {
    el.onclick = function () {
        input.forEach(function (el2) {
            el2.checked = false
        })
        el.firstElementChild.checked = true;
    }
})


let message = document.getElementById('message')
let send = document.getElementById('send')
let chat = document.querySelector('.chat')
let side

message.focus()

send.onclick = sendMessage

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(e) {
    let keyCode = e.which
    if (keyCode == 13) {
        e.preventDefault()
        sendMessage()
    }
}

function sendMessage() {
    if (message.value != '') {
        let lastSide = document.querySelectorAll('.message');
        lastSide[lastSide.length - 1].lastElementChild.className === 'me' ? side = 'other' : side = 'me'
        side === 'other' ? chat.style.paddingBottom = '85px' : chat.style.paddingBottom = '50px'
        let mes = document.createElement('div');
        mes.className = 'message'
        mes.innerHTML = '<p class=' + side + '>' + message.value + '</p >'
        chat.appendChild(mes)
        message.value = ""
        chat.scrollTop = chat.scrollHeight
    }
}

