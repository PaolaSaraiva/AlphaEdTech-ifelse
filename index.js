const $form = document.querySelector('#hamburguer-form')
const $bread = document.querySelector('#bread')
const $hamburguer = document.querySelector('#hamburguer')

const $salad1 = document.querySelector('#salad-1')
const $salad2 = document.querySelector('#salad-2')
const $saladNone = document.querySelector('#salad-none')

const $cheese = document.querySelector('#cheese')

const $total = document.querySelector('#total')


function finalizeOrder(event) {
    event.preventDefault()
    const breadType = $bread.value
    const hamburguerType = $hamburguer.value
    const cheeseType = $cheese.value

    const $breadChosen = document.querySelector('#bread-chosen')
    const $breadPrice = document.querySelector('#bread-price')

    const $hamburguerChosen = document.querySelector('#hamburguer-chosen')
    const $hamburguerPrice = document.querySelector('#hamburguer-price')

    const $saladChosen = document.querySelector('#salad-chosen')
    const $saladPrice = document.querySelector('#salad-price')
    
    const $cheeseChosen = document.querySelector('#cheese-chosen')
    const $cheesePrice = document.querySelector('#cheese-price')

    let total = 0
    let saladPrice = 0

    if(breadType === 'bread-1') {
        total += 3
        $breadChosen.innerHTML = 'Pão francês'
        $breadPrice.innerHTML = `R$ 3,00`
    } else if(breadType === 'bread-2') {
        total += 8
        $breadChosen.innerHTML = 'Pão australiano'
        $breadPrice.innerHTML = `R$ 8,00`
    } else if(breadType === 'bread-3') {
        total += 6
        $breadChosen.innerHTML = 'Pão de brioche'
        $breadPrice.innerHTML = `R$ 6,00`
    }

    if(hamburguerType === 'hamburguer-1') {
        total += 13
        $hamburguerChosen.innerHTML = 'Hambúrguer de picanha'
        $hamburguerPrice.innerHTML = 'R$ 13,00'
    } else if(hamburguerType === 'hamburguer-2') {
        total += 10
        $hamburguerChosen.innerHTML = 'Hamburguer de costela'
        $hamburguerPrice.innerHTML = 'R$ 10,00'
    } else if(hamburguerType === 'hamburguer-3') {
        total += 12
        $hamburguerChosen.innerHTML = 'Hamburguer Vegano'
        $hamburguerPrice.innerHTML = 'R$ 12,00'
    }

    if($salad1.checked) {
        total += 1.5
        $saladChosen.innerHTML += 'Alface '
        saladPrice += 1.5
    }

    if($salad2.checked) {
        total += 1.5
        $saladChosen.innerHTML += 'Tomate '
        saladPrice += 1.5
    }

    $saladPrice.innerHTML = `R$ ${saladPrice.toLocaleString('pt-Br', { currency: 'BRL', minimumFractionDigits: 2 })}`

    if($saladNone.checked) {
        $saladChosen.innerHTML = 'Sem salada'
    }

    if(cheeseType === 'cheese-1') {
        total += 3
        $cheeseChosen.innerHTML = 'Mussarela'
        $cheesePrice.innerHTML = 'R$ 3,00'
    } else if(cheeseType === 'cheese-2') {
        total += 3
        $cheeseChosen.innerHTML = 'Prato'
        $cheesePrice.innerHTML = 'R$ 3,00'
    } else if(cheeseType === 'cheese-3') {
        total += 5
        $cheeseChosen.innerHTML = 'Cheddar'
        $cheesePrice.innerHTML = 'R$ 5,00'
    }

    $total.innerHTML = `Total: R$ ${total.toLocaleString('pt-Br', { currency: 'BRL', minimumFractionDigits: 2 })}`
}

function uncheckSalads() {
    if($saladNone.checked) {
        $salad1.checked = false
        $salad2.checked = false
    }
}

function uncheckNoSalad() {
    if($salad1.checked || $salad2.checked) {
        $saladNone.checked = false
    }
}

$form.onsubmit = finalizeOrder
$saladNone.onchange = uncheckSalads
$salad1.onchange = uncheckNoSalad
$salad2.onchange = uncheckNoSalad