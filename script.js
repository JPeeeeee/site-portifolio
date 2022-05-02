const barra1 = document.querySelector('.barra:nth-child(1)')
const barra2 = document.querySelector('.barra:nth-child(2)')
const barra3 = document.querySelector('.barra:nth-child(3)')

const menuButton = document.querySelector('.menu-bola')

const menu = document.querySelector('menu-nav')

var ativo = false

menuButton.addEventListener('click', () => {

    if(!ativo){
        barra1.style.transform = 'rotate(-45deg)'
        barra2.style.transform = 'rotate(-45deg)'
        barra3.style.transform = 'rotate(45deg)'
    
        barra1.style.top = '2rem'
        barra2.style.opacity = '0%'
        barra3.style.top = '2rem'

        menuButton.style.background = 'black'
        barra1.style.background = 'white'
        barra2.style.background = 'white'
        barra3.style.background = 'white'

        ativo = true
    } else{
        barra1.style.transform = 'rotate(0deg)'
        barra2.style.transform = 'rotate(0deg)'
        barra3.style.transform = 'rotate(0deg)'

        barra1.style.top = '1.7rem'
        barra2.style.opacity = '100%'
        barra3.style.top = '2.2rem'

        menuButton.style.background = 'white'
        barra1.style.background = 'black'
        barra2.style.background = 'black'
        barra3.style.background = 'black'

        ativo = false
    }
})