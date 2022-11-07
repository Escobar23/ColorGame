const colors = [
    'rgb(5, 41, 158)', //azul
    'rgb(94, 74, 227)', //azul clarito
    'rgb(244, 44, 4)', //rojo
    'rgb(79, 56, 36)', //marron
    'rgb(242, 108, 167)', //rosa
    'rgb(255, 227, 71)', //amarillo
    'rgb(115, 135, 123)', //gris
    'rgb(255, 238, 219)', //piel o rosa pastel
    'rgb(99, 26, 134)', //morado oscuro
    'rgb(212, 81, 19)', //naranja amarronado
    'rgb(62, 195, 0)' //verde
]
let cuadro = document.querySelectorAll('.square'),
    colorDisplay = document.querySelector('#colorDisplay'),
    pickedColor = ''
    spanMsm = document.querySelector('#message'),
    h1 = document.querySelector('h1'),
    reset = document.querySelector('#reset'),
    easyBtn = document.querySelector('#easyButton')
        
let hardBtn = document.querySelector('#hardButton'),
    randomColors = [];

function colorH1() {
     if (h1.style.backgroundColor !== '#F7ACCF') {
        h1.style.backgroundColor = '#F7ACCF'
    }
    spanMsm.innerHTML = ''
}

function resetColors() {
    let newArr = [],
        easyOne = []
    

    for (let i = 0; i < cuadro.length; i++) {

            let randomC = colors[Math.floor(Math.random() * colors.length)]

            if (!newArr.includes(randomC) ) {

                newArr.push(randomC)

            }

            for (let j = 0; j < cuadro.length; j++) {

                cuadro[j].style.backgroundColor = newArr[j]
                
            }
        
        }
        
    if (easyBtn.classList.contains('selected')) {
        easyOne = newArr.slice(0, 3)
        console.log(easyOne)
        pickedColor = easyOne[Math.ceil(Math.random() * (easyOne.length - 1))]
    } else {
    
        pickedColor = newArr[Math.ceil(Math.random() * (newArr.length - 1))]
    }

    colorDisplay.innerHTML = pickedColor
   
    setTimeout(colorH1, 2000)

}




function changeColors(color) {
    
    for (let i = 0; i < cuadro.length; i++) {

        cuadro[i].style.backgroundColor = color

    }

}

for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener('click', function (e) {
        
        let div = e.target,
            clickedColor = div.style.backgroundColor;

        
        if (clickedColor !== pickedColor) {

            changeColors(clickedColor)
            div.style.backgroundColor = '#1d142e'
            spanMsm.innerHTML = '¡Intentalo Nuevamente!'
            
        } else {

            spanMsm.innerHTML = '¡Correcto!'
            h1.style.backgroundColor = clickedColor
            reset.innerHTML = 'Play Again?'
            resetColors()

        }
        
    }); 
}

document.addEventListener('DOMContentLoaded', function (e) {

   e.preventDefault()
    resetColors()

})
 
reset.addEventListener('click', () => {
    let newArr = []
    resetColors()
    
    for (let i = 0; i < cuadro.length; i++) {
       

        newArr.push(cuadro[i].style.backgroundColor)
        
    }

    
    reset.innerHTML = 'Nuevos Colores'
    h1.style.backgroundColor = '#F7ACCF'
    spanMsm.innerHTML = ''

})

easyBtn.addEventListener('click', () => {

    hardBtn.classList.remove("selected")
    easyBtn.classList.add('selected')
    let newArr = []
    resetColors()

    for (let i = 0; i < cuadro.length; i++) {
        

        if (i < 3) {
        newArr.push(cuadro[i].style.backgroundColor)
    }

        if (i >= 3) {
            
          cuadro[i].style.display = "none";
        }
        
    }
   

})

hardBtn.addEventListener('click', () => {

    easyBtn.classList.remove("selected");
    hardBtn.classList.add('selected')
    let newArr = [];

    for (let i = 0; i < cuadro.length; i++) {
        
        newArr.push(cuadro[i].style.backgroundColor)
        if (i >= 3) { cuadro[i].style.display = "block" }
        
    }
    resetColors()
    

})