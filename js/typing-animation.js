// Hero typing animation
const textList = [
  "Welcome to my portfolio website!",
  "I'm a Full-Stack Web Developer!",
  "I'm a Linux Enthusiast!",
  "I'm a Student!"
];

const typingText = document.getElementById("typing-text");
const pointer = document.createElement("span");
pointer.className = "blink";
typingText.appendChild(pointer);

let listItemIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeListItem() {
  const listItem = textList[listItemIndex];

  if (isDeleting) {
    typingText.textContent = listItem.slice(0, charIndex--) + " ";
  } else {
    typingText.textContent = listItem.slice(0, charIndex++) + " ";
  }

  if (isDeleting) {
    if (charIndex === 0) {
      isDeleting = false;
      listItemIndex++;

      if (listItemIndex >= textList.length) {
        listItemIndex = 0;
      }
    }
  } else {
    if (charIndex === listItem.length) {
      isDeleting = true;
      setTimeout(typeListItem, 1000); // Time delay before deleting starts
      return;
    }
  }

  const typingSpeed = isDeleting ? 25 : 50; // Adjust the typing and deleting speed
  setTimeout(typeListItem, typingSpeed);
}

window.addEventListener("DOMContentLoaded", typeListItem);
