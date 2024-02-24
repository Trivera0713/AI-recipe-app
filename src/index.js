function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe will be here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generatePoem);
