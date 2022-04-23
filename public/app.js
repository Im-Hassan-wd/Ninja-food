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
let instructions = [];

ingredientBtn.addEventListener('click', (e) => {
   e.preventDefault();
   ingredients.push(ingredient.value);
   ingredientDiv.innerHTML += '<li>'+ingredient.value+'</li>'
})

instructionBtn.addEventListener('click', (e) => {
   e.preventDefault();
   instructions.push(instruction.value);
   instructionDiv.innerHTML += '<li>'+instruction.value+'</li>'
})

form.addEventListener('submit', async (e) => {
   e.preventDefault();

   // get the values
   const recipeName = form['recipe-name'].value;
   const recipeSnippet = form['recipe-snippet'].value;
   const recipeIngredients = ingredients;
   const recipeInstructions = instructions;
   console.log(recipeName, recipeSnippet, recipeIngredients, recipeInstructions)

   try{
      const res = await fetch('/create', {
      method: 'POST',
      body: JSON.stringify({ recipeName, recipeSnippet, recipeIngredients, recipeInstructions }),
      headers: { 'Content-Type': 'application/json'}
      });
   }
   catch(err){
      console.log(err);
   }
}); 