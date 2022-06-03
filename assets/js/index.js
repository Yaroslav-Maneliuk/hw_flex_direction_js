'use strict'

const myButton = document.querySelectorAll("button");
const container = document.getElementById("container");

for (const btn of myButton) {
  btn.addEventListener("click",({target: {dataset: { color },},target,}) => {
      container.style.backgroundColor
      = color;
    }
  );
}











// const myButton = document.querySelectorAll("div>button");
// const container = document.getElementById("container");

// for (const btn of myButton) {
//   btn.addEventListener(
//     "click",
//     ({
//       target: {
//         dataset: { color },
//       },
//       target,
//     }) => {
//       container.style.backgroundColor = color;
//     }
//   );
// }