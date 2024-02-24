function displayRecipe(response) {
  console.log(response.data.answer);
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let list = document.querySelector("#user-list");
  let apiKey = "f68406t3o5c3f2a4369b987ab457dcba";
  let prompt = `Generate a food recipe with the following ingredients ${list.value}`;
  let context =
    "You are renowned chef that has a versatile palate. Your mission is to generate 2 different food recipes in basic HTML. Make sure to use the ingredients provided by the user. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generatePoem);
