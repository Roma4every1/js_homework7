const links = [
  "https://learn.javascript.ru",
  "https://learn.javascript.ru/searching-elements-dom",
  "https://learn.javascript.ru/structure",
  "#test",
];
const aElements = [];
for (let i = 0; i < links.length; i++) {
  const aElement = document.createElement("a");
  aElement.setAttribute("href", links[i]);
  aElement.textContent = `Link ${i + 1} `;
  aElement.classList.add("link");
  aElements.push(aElement);
}
for (let i = 0; i < aElements.length; i++) {
  document.body.appendChild(aElements[i]);
}
