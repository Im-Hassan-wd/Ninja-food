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
  const ingrdientBtn = document.querySelector('.ingredientBtn');
  const ingredientDiv = document.querySelector('.ingredient');
  const instructionDiv = document.querySelector('.insruction');

  const ingredient = form.ingredient;
  const instruction = form.instruction;

  let ingredients = [];
  let instructions = []

  form.addEventListener('submit', (e) => {
     e.preventDefault();
  }); 

  ingrdientBtn.addEventListener('click', () => {
     ingredients.push(ingredient.value);
     ingredients.forEach(ingredient => {
      ingredientDiv.innerText = ingredient;
     })
  })

  instructionBtn.addEventListener('click', () => {
     instructions.push(instruction.value);
     console.log(instructions)
  })