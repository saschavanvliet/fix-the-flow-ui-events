// Niet door mij geschreven
let interaction = document.querySelector('a:nth-of-type(12)')
function jumpHandler() {
  interaction.classList.toggle('jump')
}
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

// Mijn code - button 1
let frontend = document.querySelector('a:nth-of-type(1)')
frontend.addEventListener('click', colorclick)
function colorclick(){
  frontend.classList.toggle('color')
  console.log
}
// button 2
let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', groterclick)
function groterclick(){
  design.classList.toggle('groter')
}

// button 3
let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('mousemove', omdraaienouleh)
function omdraaienouleh(){
  and.classList.toggle('turnaround')
}

// button 4
let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('click', popupouleh)
function popupouleh(){
  development.classList.toggle('popup')
}