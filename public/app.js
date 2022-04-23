  // menu bar
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  burger.addEventListener('click', () => {
     if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
     } else {
        menu.classList.add('hidden');
     }
  });

  // form 
  const form = document.querySelector('form');
  const ingredientBtn = document.querySelector('.ingredientBtn');
  const instructionBtn = document.querySelector('.instructionBtn');
  const ingredientDiv = document.querySelector('.ingredient');
  const instructionDiv = document.querySelector('.instruction');

  const ingredient = form.ingredient;
  const instruction = form.instruction;

  let ingredients = [];
  let instructions = []

  form.addEventListener('submit', (e) => {
     e.preventDefault();
  }); 

  ingredientBtn.addEventListener('click', () => {
     ingredients.push(ingredient.value);
     ingredientDiv.innerHTML += '<li>'+ingredient.value+'</li>'
  })

  instructionBtn.addEventListener('click', () => {
     instructions.push(instruction.value);
     instructionDiv.innerHTML += '<li>'+instruction.value+'</li>'
  })