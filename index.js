const coloredDiv = document.createElement("div");

document.body.append(coloredDiv);
coloredDiv.classList.add("main");
coloredDiv.style.backgroundColor = "yellow";
coloredDiv.style.height = "100px";

let inputColor = prompt(
  "Виберіть колір фону з списку (червоний, синій, помаранчевий)"
);
switch (inputColor && inputColor.toLowerCase()) {
  case "червоний":
    inputColor = "red";
    break;
  case "синій":
    inputColor = "blue";
    break;
  case "помаранчевий":
    inputColor = "orange";
    break;
  default:
    inputColor = "";
    alert("Помилка! Колір не знайдено, спробуйте ввести свій");
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    document.body.append(colorInput);
    colorInput.addEventListener("input", () => {
      coloredDiv.style.backgroundColor = colorInput.value;
    });
}
coloredDiv.style.backgroundColor = inputColor;
coloredDiv.style.boxShadow = confirm("Додати тінь?") ? "10px 10px 5px" : "";
coloredDiv.textContent = prompt("Введіть текстове наповненя блоку");
