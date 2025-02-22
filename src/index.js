function displayRecipe(response) {
  console.log(response.data.answer);
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let list = document.querySelector("#user-list");
  let apiKey = "f68406t3o5c3f2a4369b987ab457dcba";
  let prompt = `Generate a food recipe with the following ingredients ${list.value}`;
  let context =
    "You are renowned chef that has a versatile palate. Your mission is to generate a food recipe in basic HTML. Make sure to only use the ingredients listed by the user, do not include page format in your response.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = ` <div class="generating">
  Generating a delicious recipe for you with ${list.value}</div>`;

  console.log(`prompt:${prompt}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generateRecipe);
