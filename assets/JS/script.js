const arcodeonBtn = document.querySelectorAll('.arcodeon .btn')


arcodeonBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const arcodeon = btn.parentElement
        const isOpen = arcodeon.classList.contains('open')

        if (isOpen) {
            arcodeon.classList.remove('open')
        } else {
            arcodeon.classList.add('open')
        }

    })
})
