const title = document.querySelector("h1");
const text = document.querySelector(".text");
const listItem = document.querySelector("li#listItem3");
const listItems = document.querySelectorAll("li.list-item");
console.log(text.textContent);
title.innerHTML = "Title level 1";
listItem.innerHTML = "<strong>List item 3</strong>";
const link = document.querySelector("a");
link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener");
link.removeAttribute("role");
link.href =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
