const panels = document.querySelectorAll('.panel')

panels.forEach(paneç => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
})

}

