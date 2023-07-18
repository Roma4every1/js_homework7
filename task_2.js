const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
const imgElement = document.createElement("img");
imgElement.setAttribute("src", imageUrl);
imgElement.style.cssText='width:auto; height:300px';
title.after(imgElement);
const clonedImg = imgElement.cloneNode(true);
document.body.appendChild(clonedImg);
